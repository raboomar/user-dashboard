package com.example.users.api;

import com.example.users.exception.BadRequestException;
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
    }

    public void addUser(User user) {
     Boolean emailExist = userRepository.existsByEmail(user.getEmail());
     if (emailExist){
         throw new BadRequestException(
                 user.getEmail() + " is taken"
         );
     }
        userRepository.save(user);
    }
}
