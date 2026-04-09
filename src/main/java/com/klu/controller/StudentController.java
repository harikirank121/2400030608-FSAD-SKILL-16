package com.klu.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.klu.model.Student;
import com.klu.service.StudentService;
import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
@Tag(name = "Student API", description = "CRUD operations for Students")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping
    @Operation(summary = "Add a new student", description = "Saves a student record in the database")
    @ApiResponse(responseCode = "200", description = "Student added successfully")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        return ResponseEntity.ok(service.addStudent(student));
    }

    @GetMapping
    @Operation(summary = "Get all students", description = "Retrieves all student records")
    public ResponseEntity<List<Student>> getAllStudents() {
        return ResponseEntity.ok(service.getAllStudents());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get student by ID", description = "Retrieves a single student by their ID")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = service.getStudentById(id);
        return student != null ? ResponseEntity.ok(student) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update student", description = "Updates an existing student record")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
        Student updatedStudent = service.updateStudent(id, studentDetails);
        return updatedStudent != null ? ResponseEntity.ok(updatedStudent) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete student", description = "Removes a student record from the database")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        service.deleteStudent(id);
        return ResponseEntity.ok().build();
    }
}
