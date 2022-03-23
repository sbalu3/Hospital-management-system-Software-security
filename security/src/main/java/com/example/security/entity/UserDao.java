package com.example.security.entity;

import lombok.Data;

import javax.persistence.*;
@Data
@Entity
@Table(name="USERS")
public class UserDao {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Integer userId;

    @Column(name="role")
    private String role;

    @Column(name="password")
    private String password;

    @Column(name="first_name")
    private String first_name;

    @Column(name="last_name")
    private String last_name;

    @Column(name="gender")
    private String gender;

    @Column(name="date_of_birth")
    private String date_of_birth;

    @Column(name="mobile_number")
    private Long mobile_number;

    @Column(nullable=false, unique=true,name="email")
    private String email;

    @Column(name="address")
    private String address;

    @Column(name="city")
    private String city;

    @Column(name="state")
    private String state;

    @Column(name="country")
    private String country;

    @Column(name="login_status")
    private String login_status;





}
