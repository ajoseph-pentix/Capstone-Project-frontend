package com.dream.app.demo.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
public class Keyword {

    @Id
    @GeneratedValue
    @Column(name = "Keyword_Id", nullable = false)
    private Long keywordId;

    @Column(name = "Name", length = 128, nullable = false)
    private String name;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "keywords")
    private Set<DreamPost> dreamPosts = new HashSet<>();

    public Long getKeywordId() {
        return keywordId;
    }

    public void setKeywordId(Long keywordId) {
        this.keywordId = keywordId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<DreamPost> getDreamPosts() {
        return dreamPosts;
    }

    public void setDreamPosts(Set<DreamPost> dreamPosts) {
        this.dreamPosts = dreamPosts;
    }

}