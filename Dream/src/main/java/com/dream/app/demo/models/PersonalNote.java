package com.dream.app.demo.models;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class PersonalNote {

    @Id
    @GeneratedValue
    @Column(name = "Note_Id", nullable = false)
    private Long noteId;

    @Column(name = "Text", length = 1024, nullable = false)
    private String text;

    @ManyToOne
    @JoinColumn(name = "userId")
  //  @JsonIgnore
    private AppUser appUser;

    public Long getNoteId() {
        return noteId;
    }

    public void setNoteId(Long noteId) {
        this.noteId = noteId;
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

}
