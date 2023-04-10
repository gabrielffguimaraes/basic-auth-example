package com.bankapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("notices")
public class NoticesController {
    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(new ArrayList<>());
    }
}
