package com.example.demo.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.beans.Product;
@Repository
public class ProductRepository {
public List<Product> getAllproducts()
{
	List<Product> products = new ArrayList<Product>();
	products.add(new Product (101, "Book"));
	products.add(new Product (102, "pen"));
	products.add(new Product (103, "pencil"));	
	return products;
}
}

