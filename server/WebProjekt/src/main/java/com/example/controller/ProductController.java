package com.example.controller;

import com.example.entity.Product;
import com.example.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService service;


    @GetMapping("/products/{uid}")
    public List<Product> getProducts(@PathVariable String uid) throws ExecutionException, InterruptedException {
        return service.getProducts(uid);
    }

    @GetMapping("/product/{name}")
    public Product getProduct(@PathVariable String name) throws ExecutionException, InterruptedException {
        return service.getProduct(name);
    }

    @PostMapping("/add")
    public String addProduct(@RequestBody Product product)throws InterruptedException, ExecutionException {
        return service.addProduct(product);
    }

    @PutMapping("/update")
    public String updateProduct(@RequestBody Product product)throws InterruptedException, ExecutionException {
        return service.updateProduct(product);
    }

    @DeleteMapping("/delete/{name}")
    public String deleteProduct(@PathVariable String name)throws InterruptedException, ExecutionException {
        return service.deleteProduct(name);
    }

    @GetMapping("/test")
    public ResponseEntity<String> testApi(){
        return ResponseEntity.ok(("Radi!"));
    }
}
