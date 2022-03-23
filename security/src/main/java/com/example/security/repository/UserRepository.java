package com.example.security.repository;

import com.example.security.entity.UserDao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserDao, Integer> {
    UserDao findByEmail(String email);

}
