package com.bankapp.controller.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CustomerDto {
    private Integer id;
    private String email;
    private String name;
    private String mobileNumber;
}
