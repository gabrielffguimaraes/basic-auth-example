package com.bankapp.service.impl;

import com.bankapp.controller.dto.UserRegisterDto;
import com.bankapp.model.Customer;
import com.bankapp.repository.CustomerRepository;
import com.bankapp.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthServiceImpl implements AuthService {
    private final PasswordEncoder passwordEncoder;
    private final CustomerRepository customerRepository;

    public AuthServiceImpl(PasswordEncoder passwordEncoder, CustomerRepository customerRepository) {
        this.passwordEncoder = passwordEncoder;
        this.customerRepository = customerRepository;
    }

    @Override
    public void register(UserRegisterDto userRegisterDto) {
        if(customerRepository.existsByEmail(userRegisterDto.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"User already exist.");
        };
        Customer customer = Customer.builder()
                .email(userRegisterDto.getEmail())
                .name(userRegisterDto.getName())
                .mobileNumber(userRegisterDto.getMobileNumber())
                .password(passwordEncoder.encode(userRegisterDto.getPassword()))
                .build();
        customerRepository.save(customer);
    }
}
