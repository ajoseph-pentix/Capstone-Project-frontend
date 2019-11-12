package com.dream.app.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dream.app.demo.models.DreamPost;
import com.dream.app.demo.service.DreamPostService;
import com.dream.app.demo.transferobject.DreamPostDTO;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private DreamPostService dreamPostService;

    @RequestMapping(value="/getallpost", method = RequestMethod.GET)
    public List<DreamPostDTO> getAllPost() {
        List<DreamPost> dreamPosts =  dreamPostService.getAllPosts();
        if(dreamPosts != null && !dreamPosts.isEmpty()) {
            List<DreamPostDTO> dtoList = new ArrayList<DreamPostDTO>();
            for(DreamPost post : dreamPosts) {
                DreamPostDTO dto = new DreamPostDTO();
                dto = dto.populateDreamPostDTO(post);
                dtoList.add(dto);
            }
            return dtoList;
        }
        return new ArrayList<DreamPostDTO>();
    }
}