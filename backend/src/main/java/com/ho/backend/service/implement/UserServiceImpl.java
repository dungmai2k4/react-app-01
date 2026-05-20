package com.ho.backend.service.implement;

import com.ho.backend.dto.auth.AuthRequest;
import com.ho.backend.dto.auth.AuthResponse;
import com.ho.backend.entity.User;
import com.ho.backend.exception.InvalidCredentialsException;
import com.ho.backend.exception.MismatchException;
import com.ho.backend.exception.ResourceNotFoundException;
import com.ho.backend.exception.UnauthorizedException;
import com.ho.backend.repository.UserRepository;
import com.ho.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public AuthResponse register(AuthRequest request) {

        if (userRepository.existsByUserName(request.getUserName())) {
            throw new UnauthorizedException("Username already exists");
        }

        User user = new User();
        user.setUserName(request.getUserName());

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        User saved = userRepository.save(user);

        return new AuthResponse(saved.getId(), saved.getUserName());
    }

    @Override
    public AuthResponse login(AuthRequest request) {

        User user = userRepository.findByUserName(request.getUserName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        boolean isMatch = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!isMatch) {
            throw new InvalidCredentialsException("Wrong password");
        }

        return new AuthResponse(user.getId(), user.getUserName());
    }
}