package com.dream.app.demo.models;

import java.util.Date;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.dream.app.demo.transferobject.CommentDTO;
//import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Comment {
    @Id
    @GeneratedValue
    @Column(name = "Comment_Id", nullable = false)
    private Long commentId;

    @NotNull
    @Lob  //Allows storage of large data
    @Column(name = "Text", nullable = false)
    private String text;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Dream_Post_Id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    //@JsonIgnore
    private DreamPost dreamPost;

    @ManyToOne(optional = false)
    @JoinColumn(name = "userId", nullable = false)
    //@JsonIgnore
    private AppUser appUser;

    @Column(name = "Created_Date", length = 36, nullable = false)
    private Date createdDate;

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public DreamPost getDreamPost() {
        return dreamPost;
    }

    public void setDreamPost(DreamPost dreamPost) {
        this.dreamPost = dreamPost;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public CommentDTO populateCommentDTO() {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setAppUser(this.getAppUser());
        commentDTO.setCommentId(this.getCommentId());
        commentDTO.setCreatedDate(this.getCreatedDate());
        commentDTO.setDreamPost(this.getDreamPost());
        commentDTO.setText(this.getText());
        return commentDTO;
    }
}

