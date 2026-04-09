package com.klu.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @PostMapping("/add")
    public ResponseEntity<String> addRecord() {
        return ResponseEntity.ok("Admin: Record Added Successfully");
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteRecord() {
        return ResponseEntity.ok("Admin: Record Deleted Successfully");
    }
}
