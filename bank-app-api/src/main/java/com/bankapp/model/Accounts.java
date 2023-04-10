package com.bankapp.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Accounts {
    @Id
    private Integer customerId;

    private Integer accountNumber;
    private String accountType;
    private String branchAddress;
    private Date createDt= new Date();
}
