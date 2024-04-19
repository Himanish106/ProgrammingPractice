package com.demo.products.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.products.beans.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
