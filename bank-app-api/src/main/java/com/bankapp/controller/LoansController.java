package com.bankapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("loans")
public class LoansController {
    @GetMapping
    public ResponseEntity<?> listAll() {
        return ResponseEntity.ok(new ArrayList<>());
    }
}
