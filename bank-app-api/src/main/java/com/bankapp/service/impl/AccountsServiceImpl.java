package com.bankapp.service.impl;

import com.bankapp.model.Accounts;
import com.bankapp.repository.AccountRepository;
import com.bankapp.service.AccountService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountsServiceImpl implements AccountService {

    private final AccountRepository accountsRepository;

    public AccountsServiceImpl(AccountRepository accountsRepository) {
        this.accountsRepository = accountsRepository;
    }

    @Override
    public void save(Accounts account) {
        this.accountsRepository.save(account);
    }

    @Override
    public Accounts findByCustomerId(Integer id) {
        Optional<Accounts> accountsOptional = accountsRepository.findByCustomerId(id);
        return accountsOptional.orElse(null);
    }
}
