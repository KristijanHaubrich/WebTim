package com.example.controller;

import com.example.entity.Product;
import com.example.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService service;


    @GetMapping("/products")
    public List<Product> getProducts() throws ExecutionException, InterruptedException {
        return service.getProducts();
    }

    @PostMapping("/add")
    public String addProduct(@RequestBody Product product)throws InterruptedException, ExecutionException {
        return service.addProduct(product);
    }

    @PutMapping("/update")
    public String updateProduct(@RequestBody String name)throws InterruptedException, ExecutionException {
        return service.updateProduct(name);
    }

    @DeleteMapping("/delete")
    public String deleteProduct(@RequestBody String product)throws InterruptedException, ExecutionException {
        return service.deleteProduct(product);
    }

    @GetMapping("/test")
    public ResponseEntity<String> testApi(){
        return ResponseEntity.ok(("Radi!"));
    }
}
