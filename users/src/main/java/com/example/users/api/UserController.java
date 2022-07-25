package com.example.users.api;

import com.example.users.users.Gender;
import com.example.users.users.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;


    @CrossOrigin
    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers();

//        return List.of(new User(1L,"rami","rami@gmail", Gender.MALE));
    }
}
