package com.dream.app.demo.repository;

import java.util.List;
import com.dream.app.demo.models.AppUser;
import com.dream.app.demo.models.PersonalNote;
import org.springframework.data.repository.CrudRepository;

public interface PersonalNoteRepository extends CrudRepository<PersonalNote, Long> {

    List<PersonalNote> findByAppUser(AppUser appUser);
}