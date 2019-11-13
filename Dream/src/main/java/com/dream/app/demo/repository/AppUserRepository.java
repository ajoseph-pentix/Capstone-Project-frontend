package com.dream.app.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.dream.app.demo.models.AppUser;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface AppUserRepository extends CrudRepository<AppUser, Long> {

    // query will find a user by login username and and password
    @Query("FROM Person p WHERE p.username = ?1 and p.password = ?2")
    public AppUser login(String username, String password);

    // find a person by their unique username
    public AppUser findByUsername(String username);

    public AppUser findByEmail(String email);
    public AppUser findByUserId(Long userId);
}
