package com.demo.imageupload.imageupload.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.demo.imageupload.imageupload.Entity.ImageEntity;
import com.demo.imageupload.imageupload.Repository.ImageRepository;

@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public void uploadImage(String name, byte[] data) {
        ImageEntity imageEntity = new ImageEntity();
        imageEntity.setName(name);
        imageEntity.setData(data);
        imageRepository.save(imageEntity);
    }

    public void uploadImage(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        byte[] data = file.getBytes();
        uploadImage(fileName, data);
    }

    public List<ImageEntity> getAllImages() {
        return imageRepository.findAll();
    }
}
