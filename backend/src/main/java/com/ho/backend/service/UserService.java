package com.ho.backend.service;

import com.ho.backend.dto.auth.AuthRequest;
import com.ho.backend.dto.auth.AuthResponse;
import com.ho.backend.dto.auth.RegisterRequest;

public interface UserService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(AuthRequest request);
}
