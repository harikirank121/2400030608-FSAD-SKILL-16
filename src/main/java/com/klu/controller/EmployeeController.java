package com.klu.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import com.klu.service.UserService;
import com.klu.model.User;
import java.security.Principal;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {

    @Autowired
    private UserService service;

    @GetMapping("/profile")
    public ResponseEntity<User> getProfile(Principal principal) {
        String username = principal.getName();
        return ResponseEntity.ok(service.getUser(username));
    }
}
