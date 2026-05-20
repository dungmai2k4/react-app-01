package com.ho.backend.service;

import com.ho.backend.dto.auth.AuthRequest;
import com.ho.backend.dto.auth.AuthResponse;

public interface UserService {
    AuthResponse register(AuthRequest request);
    AuthResponse login(AuthRequest request);
}
