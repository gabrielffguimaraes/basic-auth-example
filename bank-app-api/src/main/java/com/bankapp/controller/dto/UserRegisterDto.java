package com.bankapp.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserRegisterDto {
    private String email;
    private String password;
    private String name;
    private String mobileNumber;
}
