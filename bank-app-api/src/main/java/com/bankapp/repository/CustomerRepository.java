package com.bankapp.repository;

import com.bankapp.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer> {
    Optional<Customer> findCustomerByEmail(String email);

    boolean existsByEmail(String email);
}
