package com.dream.app.demo.transferobject;

import com.dream.app.demo.models.AppUser;
import com.dream.app.demo.models.PersonalNote;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class PersonalNoteDTO {

    private Long noteId;

    private Long userId;

    private String text;

    @JsonIgnore
    private AppUser appUser;

    public Long getNoteId() {
        return noteId;
    }

    public void setNoteId(Long noteId) {
        this.noteId = noteId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public PersonalNote populatePersonNote() {
        PersonalNote note = new PersonalNote();
        note.setAppUser(this.getAppUser());
        note.setNoteId(this.getNoteId());
        note.setText(this.getText());
        return note;
    }

}