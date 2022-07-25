package com.example.users.api;

import com.example.users.exception.BadRequestException;
import com.example.users.users.Gender;
import com.example.users.users.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.function.DoubleToIntFunction;

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

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public void editUser(Long id, User user) {
        User currentUser = userRepository.findUserById(id);
        Boolean emailExist = userRepository.existsByEmail(user.getEmail());
        if (emailExist){
            throw new BadRequestException(
                    user.getEmail() + " is taken"
            );
        }
        if (!Objects.equals(currentUser.getName(), user.getName())){
            currentUser.setName(user.getName());
        }
        if(!Objects.equals(currentUser.getEmail(), user.getEmail()) && !userRepository.existsByEmail(user.getEmail()) ){
            currentUser.setEmail(user.getEmail());
        }
        if (!Objects.equals(currentUser.getGender(),user.getGender())){
            currentUser.setGender(user.getGender());
        }
        userRepository.save(currentUser);
    }
}
