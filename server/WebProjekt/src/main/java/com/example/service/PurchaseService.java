package com.example.service;

import com.example.entity.Purchase;

import java.util.List;
import java.util.concurrent.ExecutionException;

public interface PurchaseService {

    List<Purchase> getPurchases() throws ExecutionException, InterruptedException;
    String addPurchase(Purchase purchase) throws ExecutionException, InterruptedException;
    String updatePurchase(Purchase purchase) throws ExecutionException, InterruptedException;
    String deletePurchase(String name);
}
