package com.dream.app.demo.service;

public class AppUserNotFoundException extends RuntimeException {

    public AppUserNotFoundException(String exception) {
        super(exception);
    }

}