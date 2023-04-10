package com.bankapp.service;

import com.bankapp.model.Customer;

public interface CustomerService {
    Customer findByEmail(String email);
}
