package com.klu.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;

@Entity
@Table(name = "students")
@Schema(description = "Details about the Student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(accessMode = Schema.AccessMode.READ_ONLY, description = "The database generated student ID")
    private Long id;

    @Schema(description = "Name of the student", example = "John Doe")
    private String name;

    @Schema(description = "Email of the student", example = "john.doe@example.com")
    private String email;

    @Schema(description = "Course name of the student", example = "Computer Science")
    private String course;

    public Student() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }
}
