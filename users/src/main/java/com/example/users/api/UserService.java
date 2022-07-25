package com.example.users.api;

import com.example.users.users.Gender;
import com.example.users.users.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
//        return List.of(new User(1L,"rami","rami@gmail", Gender.MALE));
    }

    public void addUser(User user) {
        userRepository.save(user);
    }
}
