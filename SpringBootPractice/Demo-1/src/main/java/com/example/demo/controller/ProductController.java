package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.Product;
import com.example.demo.services.ProductServices;

@RestController
public class ProductController {
	@Autowired
	ProductServices productServices;

	@GetMapping(value = "/")
	public List<Product> getAllDBProducts() {
		return productServices.getDBProducts();
	}
}
