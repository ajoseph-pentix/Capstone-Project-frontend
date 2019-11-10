package com.dream.app.demo.repository;

import java.util.List;
import com.dream.app.demo.models.Keyword;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.dream.app.demo.models.AppUser;
import com.dream.app.demo.models.DreamPost;

@Repository
public interface DreamPostRepository extends CrudRepository<DreamPost, Long> {

    @Query("FROM Post p WHERE p.person.id= ?1")
    public Iterable<DreamPost> findAllPostsByAppUser(Long personId);

    List<DreamPost> findByKeywords_nameAndAppUser_userIdNot(Keyword keywords_name, Long appUser_userId);
}
