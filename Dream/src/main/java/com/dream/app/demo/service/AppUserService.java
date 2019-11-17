package com.dream.app.demo.service;

import java.util.List;

import com.dream.app.demo.models.AppUser;
import com.dream.app.demo.models.PersonalNote;
import com.dream.app.demo.transferobject.PersonalNoteDTO;

public interface AppUserService {

    //creates a Service that controls registering a User
    public AppUser registerUser(AppUser appUser) throws Exception;

    //creates a Service that controls updating user information
    public AppUser updateUser(AppUser appUser) throws Exception;

    //creates a service for getting user info by userId
    public AppUser getUserByUserId(Long userId);

    //creates a services for getting user by username
    public AppUser getUserByUsername(String userName);

    //creates a service for getting user by email address
    public AppUser getUserByEmail(String email);

    //a service for retrieving personal notes written by user using Id
    public List<PersonalNote> getPersonalNotesByAppUserId(Long userId);

    PersonalNote savePersonalNote(PersonalNoteDTO noteDTO);

    //a service for deleting a user's personal note
    public void deletePersonalNote(Long personalNoteId);
}
