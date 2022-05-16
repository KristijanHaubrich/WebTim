package com.example.entity;

import com.google.api.client.util.DateTime;

public class Purchase {

    private String store;
    private double price;
    private DateTime dateTime;

    public String getStore() {
        return store;
    }

    public void setStore(String store) {
        this.store = store;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public DateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(DateTime dateTime) {
        this.dateTime = dateTime;
    }
}
