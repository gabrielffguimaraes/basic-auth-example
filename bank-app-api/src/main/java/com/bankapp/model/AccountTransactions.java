package com.bankapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class AccountTransactions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer transactionId;
    private Integer accountNumber;
    private Integer customerId;
    private Date transactionDt;
    private String transactionSummary;
    private String transactionType;
    private Integer transactionAmt;
    private Integer closingBalance;
}
