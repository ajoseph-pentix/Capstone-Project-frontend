package com.dream.app.demo.service;

import java.util.List;


import com.dream.app.demo.models.AppUser;
import com.dream.app.demo.models.Comment;
import com.dream.app.demo.models.DreamPost;
import com.dream.app.demo.models.Keyword;
import com.dream.app.demo.transferobject.CommentDTO;
import com.dream.app.demo.transferobject.DreamPostDTO;
import org.springframework.stereotype.Service;

@Service
public interface DreamPostService {

    List<DreamPost> findPostByAppUser(AppUser appUser);
    Iterable<DreamPost> getAllPost();
    DreamPost createPost(DreamPostDTO postDTO);
    DreamPost updatePost(DreamPostDTO postDTO);
    List<DreamPost> findPostsByKeywords(List<String> keywords, long userId);
    void deletePostByPostId(Long postId);
    Comment addComment(CommentDTO commentDTO);
    Keyword saveKeyword(Keyword keyword);
    Keyword getKeywordByName(String name);
    List<Comment> getCommentsByDreamPostId(Long postId);
    List<Comment> getCommentsByAppUserId(Long userId);
    void deleteComment(Long commentId);

}
