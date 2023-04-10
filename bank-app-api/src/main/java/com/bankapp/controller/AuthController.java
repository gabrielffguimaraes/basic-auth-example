package com.bankapp.controller;

import com.bankapp.controller.dto.UserRegisterDto;
import com.bankapp.helpers.AuthenticationHelper;
import com.bankapp.model.Customer;
import com.bankapp.service.AuthService;
import com.bankapp.service.CustomerService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
public class AuthController {

    private final AuthService authService;
    private final CustomerService customerService;

    public AuthController(AuthService authService, CustomerService customerService) {
        this.authService = authService;
        this.customerService = customerService;
    }

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@RequestBody UserRegisterDto userRegisterDto) {
        authService.register(userRegisterDto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email) {
        Customer customer = customerService.findByEmail(email);
        return ResponseEntity.ok(Customer.of(customer));
    }

    @GetMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        AuthenticationHelper.logout(request,response);
    }

    @GetMapping("/csrf")
    public String csrf(CsrfToken csrfToken) {
        return csrfToken.getToken();
    }
}
