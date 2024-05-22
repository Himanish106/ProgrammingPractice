package com.event.backend.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.event.backend.Entity.ContactUs;
import com.event.backend.Entity.Feedback;
import com.event.backend.Entity.Role;
import com.event.backend.Entity.User;
import com.event.backend.EventRepository.ContactUsRepo;
import com.event.backend.EventRepository.EventRepository;
import com.event.backend.EventRepository.FeedbackRepository;
import com.event.backend.Service.OTP.EmailSenderService;
import com.event.backend.Service.OTP.OTPService;

import jakarta.transaction.Transactional;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private ContactUsRepo contactUsRepo;

    @Autowired
    private OTPService otpService;

    @Autowired
    private EmailSenderService emailSenderService;

    public User saveUser(User user) {
        Optional<User> existingUserOptional = eventRepository.findByEmail(user.getEmail());
        if (existingUserOptional.isPresent()) {
            throw new RuntimeException("User with this email is already registered.");
        }
        user.setId(UUID.randomUUID().toString());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        return eventRepository.save(user);
    }

    public List<User> getUsers() {
        return eventRepository.findUsersByRoleUser(Role.USER);
    }

    public User updateUser(String email, User updatedUser) {
        User existingUser = eventRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());
        existingUser.setContact(updatedUser.getContact());
        return eventRepository.save(existingUser);
    }

    public String findFirstNameByEmail(String email) {
        return eventRepository.findFirstNameByEmail(email);
    }

    public String findLastNameByEmail(String email) {
        return eventRepository.findLastNameByEmail(email);
    }

    public Long findContactByEmail(String email) {
        return eventRepository.findContactByEmail(email);
    }

    public Feedback saveFeedback(Feedback feedback) {
        feedback.setId(UUID.randomUUID().toString());
        return feedbackRepository.save(feedback);
    }

    public List<Feedback> getFeedback() {
        return feedbackRepository.findAll();
    }

    @Transactional
    public void deleteFeedback(String id) {
        feedbackRepository.deleteById(id);
    }

    public ContactUs saveContactUs(ContactUs contactUs) {
        contactUs.setId(UUID.randomUUID().toString());
        return contactUsRepo.save(contactUs);
    }

    public List<ContactUs> getContactUs() {
        return contactUsRepo.findAll();
    }

    @Transactional
    public void deleteContact(String id) {
        contactUsRepo.deleteById(id);
    }

    public boolean sendOTPByEmail(String email) {
        Optional<User> optionalUser = eventRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            String otp = otpService.generateOTP();

            emailSenderService.sendOTP(user.getEmail(), otp);

            user.setOtp(otp);

            eventRepository.save(user);

            return true;
        } else {
            return false;
        }

    }

    public boolean verifyAndDeleteOTP(String enteredOTP) {
        Optional<User> optionalUser = eventRepository.findByOtp(enteredOTP);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setOtp(null);
            eventRepository.save(user);
            return true;
        }
        return false;
    }

    public boolean resetPassword(String email, String newPassword) {
        Optional<User> optionalUser = eventRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Update user's password
            user.setPassword(passwordEncoder.encode(newPassword));
            eventRepository.save(user);
            return true; // Password changed successfully
        } else {
            return false; // User not found for the given email
        }
    }
}