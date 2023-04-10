package com.bankapp.controller;

import com.bankapp.model.Accounts;
import com.bankapp.service.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("accounts")
public class AccountsController {
    private final AccountService accountService;

    public AccountsController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<?> findAccountByCustomerId(@PathVariable Integer id) {
        return ResponseEntity.ok(accountService.findByCustomerId(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Accounts account) {
        this.accountService.save(account);
    }
}
