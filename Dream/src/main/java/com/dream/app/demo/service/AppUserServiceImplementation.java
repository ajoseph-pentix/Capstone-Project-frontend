package com.dream.app.demo.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dream.app.demo.models.AppUser;
import com.dream.app.demo.models.PersonalNote;
import com.dream.app.demo.repository.AppUserRepository;
import com.dream.app.demo.repository.PersonalNoteRepository;


@Service
public class AppUserServiceImpl implements AppUserService {

    private final AppUserRepository appUserRepository;
    private final PersonalNoteRepository personalNoteRepository;

    @Autowired
    public AppUserServiceImpl(final AppUserRepository appUserRepository, final PersonalNoteRepository personalNoteRepository) {
        this.appUserRepository = appUserRepository;
        this.personalNoteRepository = personalNoteRepository;
    }

    @Override
    public AppUser registerUser(AppUser user)  {
        user.setCreatedDate(new Timestamp(new Date().getTime()));
        user.setModifiedDate(new Timestamp(new Date().getTime()));
        user = this.save(user);
        return user;
    }

    @Override
    public AppUser updateUser(AppUser appUser)  {
        return this.save(appUser);
    }

    private AppUser save(AppUser appUser) {
        return appUser;
    }

    @Override
    public AppUser getUserByUserId(Long userId) {
        return appUserRepository.findByUserId(userId);
    }

    @Override
    public AppUser getUserByUsername(String userName) {
        return appUserRepository.findByUsername(userName);
    }

    @Override
    public AppUser getUserByEmail(String email) {
        return appUserRepository.findByEmail(email);
    }

    @Override
    public PersonalNote savePersonalNote () {
        note.setAppUser(appUser);
        note = personalNoteRepository.save(note);
        return note;
    }

    @Override
    public List<PersonalNote> getPersonalNotesByAppUserId(Long userId) {
        AppUser appUser = this.getUserByUserId(userId);
        List<PersonalNote> notes = personalNoteRepository.findByAppUser(appUser);
        return notes;
    }

    @Override
    public void deletePersonalNote(Long personalNoteId) {
        personalNoteRepository.deleteById(personalNoteId);
    }
}
