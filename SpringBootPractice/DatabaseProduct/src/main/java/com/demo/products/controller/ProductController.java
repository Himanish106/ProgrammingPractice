package com.demo.products.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.products.beans.Product;
import com.demo.products.services.ProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	@Autowired
	ProductService productService;

	@GetMapping(value = "/getall")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@GetMapping(value = "/getproductbyid{id}")
	public Product getProduct(@PathVariable("id") Integer id) {
		return productService.getProduct(id);
	}

	@PostMapping(value = "/addproduct")
	public Product addProduct(@RequestBody Product product) {
		return productService.addProduct(product);
	}
}
