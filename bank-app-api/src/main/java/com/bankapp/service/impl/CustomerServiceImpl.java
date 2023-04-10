package com.bankapp.service.impl;

import com.bankapp.model.Customer;
import com.bankapp.repository.CustomerRepository;
import com.bankapp.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public Customer findByEmail(String email) {
        return customerRepository.findCustomerByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"User not found !"));
    }
}
