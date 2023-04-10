package com.bankapp.repository;

import com.bankapp.model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Accounts,Integer> {
    Optional<Accounts> findByCustomerId(Integer id);
}
