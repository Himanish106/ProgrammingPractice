package com.demo.products.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.products.beans.Product;
import com.demo.products.dao.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;

	public List<Product> getAllProducts() {
		return productRepository.findAll();

	}

	public Product addProduct(Product product) {
		return productRepository.save(product);
	}

	public Product getProduct(Integer id) {
		Product product = productRepository.findById(id).orElse(null);
		return product;
	}
}
