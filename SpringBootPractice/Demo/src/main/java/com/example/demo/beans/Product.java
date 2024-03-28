package com.example.demo.beans;

public class Product {
private Integer ProductId;
private String productName;

public Product(Integer productId, String productName) {
	super();
	ProductId = productId;
	this.productName = productName;
}
public Integer getProductId() {
	return ProductId;
}
public void setProductId(Integer productId) {
	ProductId = productId;
}
public String getProductName() {
	return productName;
}
public void setProductName(String productName) {
	this.productName = productName;
}
@Override
public String toString() {
	return "Product [ProductId=" + ProductId + ", productName=" + productName + "]";
}

}
