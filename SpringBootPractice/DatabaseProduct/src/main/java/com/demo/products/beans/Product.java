package com.demo.products.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {
	@Id
	@Column(name = "pid")
	private Integer ProductId;
	@Column(name = "pname")
	private String ProductName;
	@Column(name = "qty")
	private Integer qty;

	public Integer getProductId() {
		return ProductId;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Product [ProductId=" + ProductId + ", ProductName=" + ProductName + ", qty=" + qty + "]";
	}

	public Product(Integer productId, String productName, Integer qty) {
		super();
		ProductId = productId;
		ProductName = productName;
		this.qty = qty;
	}

	public void setProductId(Integer productId) {
		ProductId = productId;
	}

	public String getProductName() {
		return ProductName;
	}

	public void setProductName(String productName) {
		ProductName = productName;
	}

	public Integer getQty() {
		return qty;
	}

	public void setQty(Integer qty) {
		this.qty = qty;
	}
}
