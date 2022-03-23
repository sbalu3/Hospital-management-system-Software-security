package com.example.security.controller;

import com.example.security.entity.UserDao;
import com.example.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<UserDao> getUsers(){
        return userService.getUsers();
    }
    @GetMapping("/hello")
    public String hello(){
        return "Hello";
    }
    @GetMapping("/getByName/{email}")
    public UserDao getByEmail(@PathVariable String email){
        return userService.getUserByEmail(email);
    }
//    @GetMapping("/getById/{id}")
//    public Optional<User> getById(@PathVariable Integer id){
//        return userService.getUserById(id);
//    }
}
