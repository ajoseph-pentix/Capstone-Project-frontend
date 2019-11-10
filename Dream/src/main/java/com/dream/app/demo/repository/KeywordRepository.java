package com.dream.app.demo.repository;

import java.util.Optional;
import com.dream.app.demo.models.Keyword;
import org.springframework.data.repository.CrudRepository;

public interface KeywordRepository extends CrudRepository<Keyword, Long> {

    Optional<Keyword> findByName(String name);
}