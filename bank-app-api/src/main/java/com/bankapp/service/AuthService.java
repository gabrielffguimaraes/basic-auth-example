package com.bankapp.service;

import com.bankapp.controller.dto.UserRegisterDto;

public interface AuthService {
    void register(UserRegisterDto userRegisterDto);
}
