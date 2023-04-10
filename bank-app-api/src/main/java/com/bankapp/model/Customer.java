package com.bankapp.model;

import com.bankapp.controller.dto.CustomerDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer customerId;
    private String name;
    @Column(unique = true)
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String mobileNumber;

    private Date createDt = new Date();

    public static CustomerDto of(Customer customer) {
        return CustomerDto.builder()
                .email(customer.getEmail())
                .name(customer.getName())
                .mobileNumber(customer.getMobileNumber())
                .id(customer.getCustomerId())
                .build();
    }
}
