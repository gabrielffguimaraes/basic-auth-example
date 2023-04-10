package com.bankapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Loans {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer loanId;

    private Integer customerId;
    private Date startDt;
    private String loanType;
    private Integer totalLoan;
    private Integer amountPaid;
    private Integer outstandingAmount;
    private Date createDt = new Date();
}
