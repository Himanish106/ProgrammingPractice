package com.demo.imageupload.imageupload.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.demo.imageupload.imageupload.Entity.ImageEntity;
import com.demo.imageupload.imageupload.Service.ImageService;

@RequestMapping("/api/images")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ImageController {
 @Autowired
    private ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            imageService.uploadImage(file);
            return ResponseEntity.status(HttpStatus.OK).body("Image uploaded successfully.");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image.");
        }
    }
    
    @GetMapping("/gallery")
    public ResponseEntity<List<ImageEntity>> getAllImages() {
        List<ImageEntity> images = imageService.getAllImages();
        return new ResponseEntity<>(images, HttpStatus.OK);
    }
}
