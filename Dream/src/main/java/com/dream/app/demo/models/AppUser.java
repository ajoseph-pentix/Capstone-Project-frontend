package com.dream.app.demo.models;

import java.util.Date;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "App_User")
public class AppUser {

    // unique primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //Specifying mapped column info, putting in specific values
    @Column(name = "userId", nullable = false)
    private Long userId;
    //setting length as a specific value to avoid errors
    //associated with unmanageable size
    @Column(name = "username", length = 36, nullable = false)
    private String username;

    @Column(name = "password", length = 128, nullable = false)
    @JsonIgnore
    private String password;

    @Column(name = "First_Name", length = 60, nullable = false)
    private String firstName;

    @Column(name = "Last_Name", length = 60, nullable = false)
    private String lastName;

    @Column(name = "Email", length = 128, nullable = false)
    private String email;

    @Column(name = "Phone", length = 10, nullable = false)
    private String phone;

    @Column(name = "Role", length = 5, nullable = false)
    private String role;
    //java util has a Date class (setting) which is desirable when viewing
    //user posts
    @Column(name = "Created_Date", length = 36, nullable = false)
    private Date createdDate;

    @Column(name = "Modified_Date", length = 36, nullable = false)
    private Date modifiedDate;

    // column getters and setters

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

}
