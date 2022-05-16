package com.example.service;

import com.example.entity.Product;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ExecutionException;

@Service
public class ProductServiceImpl implements ProductService {
    public List<Product> getProducts(String uid) throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();
        CollectionReference collectionReference = firestore.collection("products");
        ApiFuture<QuerySnapshot> future = collectionReference.get();
        List<QueryDocumentSnapshot> query = future.get().getDocuments();
        List<Product> productList = new ArrayList<>();
        for (QueryDocumentSnapshot document: query) {
            Product product = document.toObject(Product.class);
            if(Objects.equals(product.getUid(), uid)){
                productList.add(product);
            }
        }
        return productList;
    }

    public Product getProduct(String name) throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();
        DocumentReference reference = firestore.collection("products").document(name);
        ApiFuture<DocumentSnapshot> future = reference.get();
        DocumentSnapshot snapshot = future.get();
        if(snapshot.exists()){
            Product product = snapshot.toObject(Product.class);
            return product;
        }
        return null;

    }


    public String addProduct(Product product) throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture = firestore.collection("products").document(product.getName()).set(product);
        return apiFuture.get().getUpdateTime().toString();
    }

    public String updateProduct(Product product) throws ExecutionException, InterruptedException {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture = firestore.collection("products").document(product.getName()).set(product);
        return apiFuture.get().getUpdateTime().toString();
    }

    public String deleteProduct(String name) {
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture = firestore.collection("products").document(name).delete();
        return "Deleted " + name;
    }


}
