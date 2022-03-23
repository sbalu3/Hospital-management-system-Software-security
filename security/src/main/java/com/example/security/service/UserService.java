package com.example.security.service;

import com.example.security.entity.UserDao;
import com.example.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public List<UserDao> getUsers(){
        System.out.print(repository.findAll().size());
        return repository.findAll();
    }
    public UserDao getUserByEmail(String email){
        return repository.findByEmail(email);
    }
//    public Optional<User> getUserById(Integer id){
//        return repository.findById(id);
//    }
}
