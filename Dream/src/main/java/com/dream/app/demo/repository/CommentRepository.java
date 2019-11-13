package com.dream.app.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import com.dream.app.demo.models.AppUser;
import com.dream.app.demo.models.Comment;
import com.dream.app.demo.models.DreamPost;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {

    List<Comment> findByDreamPost(DreamPost dreamPost);
    List<Comment> findByAppUser(AppUser appUser);
}