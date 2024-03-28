package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.Product;
import com.example.demo.service.ProductService;
@RestController
public class ProductController {
@Autowired
ProductService productservice;
@GetMapping (value= "/getall")
public List<Product> getAllProducts ()
{
	return productservice.getALLProducts();
}
}
