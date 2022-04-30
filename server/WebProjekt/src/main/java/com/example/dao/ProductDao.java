package com.example.dao;

import com.example.entity.Product;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface ProductDao {

    List<Product> getProducts() throws ExecutionException, InterruptedException;
    String addProduct(Product product) throws ExecutionException, InterruptedException;
    String updateProduct(Product product) throws ExecutionException, InterruptedException;
    String deleteProduct(String name);
}
