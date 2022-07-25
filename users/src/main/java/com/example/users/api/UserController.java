package com.example.users.api;

import com.example.users.users.Gender;
import com.example.users.users.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    }
    @CrossOrigin
    @PostMapping
    public void addUser (@RequestBody User user){
        userService.addUser(user);
    }
}
