package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beans.Product;
import com.example.demo.dao.ProductRepository;
@Service
public class ProductService {
@Autowired
ProductRepository productRepository;
public List<Product> getALLProducts () {
	return productRepository.getAllproducts();
}
}
