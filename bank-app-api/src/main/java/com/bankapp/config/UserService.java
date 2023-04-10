package com.bankapp.config;

import com.bankapp.model.Customer;
import com.bankapp.repository.CustomerRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService implements UserDetailsService {
    private final CustomerRepository customerRepository;

    public UserService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Customer customer = customerRepository.findCustomerByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found !"));
        return new User(customer.getEmail(),customer.getPassword(), new ArrayList<GrantedAuthority>());
    }
}
