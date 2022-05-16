package com.example.service;

import com.example.entity.Product;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface ProductService {

    List<Product> getProducts(String uid) throws ExecutionException, InterruptedException;
    String addProduct(Product product) throws ExecutionException, InterruptedException;
    String updateProduct(Product product) throws ExecutionException, InterruptedException;
    String deleteProduct(String name);
    Product getProduct(String name) throws ExecutionException, InterruptedException;
}
