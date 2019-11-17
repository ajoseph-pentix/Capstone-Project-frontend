package com.dream.app.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dream.app.demo.models.AppUser;
import com.dream.app.demo.models.Comment;
import com.dream.app.demo.models.DreamPost;
import com.dream.app.demo.service.DreamPostService;
import com.dream.app.demo.transferobject.CommentDTO;
import com.dream.app.demo.transferobject.DreamPostDTO;

@RequestMapping("/post")
@RestController
public class DreamPostController {

    @Autowired
    private DreamPostService dreamPostService;

    @RequestMapping(value="/createpost", method = RequestMethod.POST)
    public DreamPostDTO createPost(@RequestBody DreamPostDTO dreamPostDTO) {
        DreamPost dreamPost = dreamPostService.createPost(dreamPostDTO);
        return dreamPostDTO.populateDreamPostDTO(dreamPost);
    }

    @RequestMapping(value="/updatepost", method = RequestMethod.POST)
    public DreamPostDTO updatePost(@RequestBody DreamPostDTO dreamPostDTO) {
        DreamPost dreamPost = dreamPostService.updatePost(dreamPostDTO);
        return dreamPostDTO.populateDreamPostDTO(dreamPost);
    }

    @RequestMapping(value="/getpostsbyuser/{userId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<DreamPostDTO> getPostsByUser(@PathVariable Long userId) {
        AppUser appUser = new AppUser();
        appUser.setUserId(userId);
        List<DreamPost> dreamPosts = dreamPostService.findPostByAppUser(appUser);
        List<DreamPostDTO> dtoList = new ArrayList<DreamPostDTO>();
        for(DreamPost post : dreamPosts) {
            DreamPostDTO dto = new DreamPostDTO();
            dto = dto.populateDreamPostDTO(post);
            dtoList.add(dto);
        }
        return dtoList;
    }
    //mapping web requests onto handler methods
    @RequestMapping(value="/getmatchedposts/{userId}", method = RequestMethod.POST,  produces = MediaType.APPLICATION_JSON_VALUE)
    public List<DreamPostDTO> getMatchedPosts(@PathVariable Long userId, @RequestBody List<String> keywords){

        List<DreamPost> dreamPosts = dreamPostService.findPostsByKeywords(keywords, userId);
        List<DreamPostDTO> dreamPostDtOs = new ArrayList<DreamPostDTO>();
        for(DreamPost post : dreamPosts) {
            DreamPostDTO dto = new DreamPostDTO();
            dto.setPostId(post.getPostId());
            dto.setTitle(post.getTitle());
            dto = dto.populateDreamPostDTO(post);
            dreamPostDtOs.add(dto);
        }
        return dreamPostDtOs;
    }

    @RequestMapping(value="/addcomment", method = RequestMethod.POST)
    public CommentDTO addComment(@RequestBody CommentDTO commentDTO) {
        Comment comment = dreamPostService.addComment(commentDTO);
        return comment.populateCommentDTO();
    }

    @RequestMapping(value="/getcommentsonpost/{postId}", method = RequestMethod.GET)
    public List<CommentDTO> getCommentsOnPost(@PathVariable Long postId) {
        List<Comment> comments =  dreamPostService.getCommentsByDreamPostId(postId);
        List<CommentDTO> commentDTOs = new ArrayList<>();
        if(comments != null && !comments.isEmpty()) {
            for(Comment comment : comments) {
                commentDTOs.add(comment.populateCommentDTO());
            }
        }
        return commentDTOs;
    }

    @RequestMapping(value="/getcommentsbyuser/{userId}", method = RequestMethod.GET)
    public List<CommentDTO> getCommentsByUser(@PathVariable Long userId) {
        List<Comment> comments =  dreamPostService.getCommentsByAppUserId(userId);
        List<CommentDTO> commentDTOs = new ArrayList<>();
        if(comments != null && !comments.isEmpty()) {
            for(Comment comment : comments) {
                commentDTOs.add(comment.populateCommentDTO());
            }
        }
        return commentDTOs;
    }

    @RequestMapping(value="/deletepostbypostid/{postId}", method = RequestMethod.GET)
    public ResponseEntity<String> deletePost(@PathVariable Long postId) {
        dreamPostService.deletePostByPostId(postId);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value="/deletecomment/{commentId}", method = RequestMethod.GET)
    public ResponseEntity<String> deleteComment(@PathVariable Long commentId) {
        dreamPostService.deleteComment(commentId);
        return ResponseEntity.ok().build();
    }

}
