package com.example.service;

import com.example.entity.Product;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ProductService {
    public List<Product> getProducts() throws ExecutionException, InterruptedException {
//        Firestore firestore = FirestoreClient.getFirestore();
//        CollectionReference collectionReference = firestore.collection("products");
//        ApiFuture<QuerySnapshot> future = collectionReference.get();
//        QuerySnapshot query = future.get();
//        List<Product> productList = new ArrayList<>();
//        query.forEach((product) -> {productList.add(product.getReference().))};
        return null;


    }

    public String addProduct(Product product) throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture = firestore.collection("products").document(product.getName()).set(product);
        return apiFuture.get().getUpdateTime().toString();
    }

    public String updateProduct(String name) {
        return null;
    }

    public String deleteProduct(String name) {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture = firestore.collection("products").document(name).delete();
        return "Deleted " + name;
    }
}
