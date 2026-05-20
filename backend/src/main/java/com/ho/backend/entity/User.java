package com.ho.backend.entity;

import com.ho.backend.entity.Enum.Role;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(
        name = "user",
        uniqueConstraints = @UniqueConstraint(columnNames = "userName")
)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false, unique = true, name = "user_name")
    String userName;

    String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    Role role = Role.CUSTOMER;
}