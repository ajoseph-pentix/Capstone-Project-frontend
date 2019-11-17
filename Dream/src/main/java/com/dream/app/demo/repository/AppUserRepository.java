package com.dream.app.demo.repository;

import com.dream.app.demo.models.AppUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRepository extends CrudRepository<AppUser, Long> {

    // query will find a user by login username and and password
    @Query("SELECT p FROM AppUser p WHERE p.username = ?1 and p.password = ?2")
    AppUser login(String username, String password);

    // find a person by their unique username
    // public AppUser findByUsername(String username);
    //public AppUser findByEmail(String email);
    //  public AppUser findByUserId(Long userId);

    Optional<AppUser> findByUserId(Long userId);
    //using Optional declares there might not be a user
    //with given value, thus preventing error bugs
    Optional<AppUser> findByUsername(String username);

    Optional<AppUser> findByEmail(String email);
}
