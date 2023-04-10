package com.bankapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @GetMapping("/")
    public void app() {
        // ENDPOINT TO CHECK AUTHENTICATED USER.
    }
}
