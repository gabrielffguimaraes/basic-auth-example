package com.bankapp.service;

import com.bankapp.model.Accounts;

public interface AccountService {
    void save(Accounts account);

    Accounts findByCustomerId(Integer id);
}
