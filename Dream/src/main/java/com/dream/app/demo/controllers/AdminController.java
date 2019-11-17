package com.dream.app.demo.controllers;

import java.util.ArrayList;
import java.util.Iterator;
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
//Admin Controller is needed for method of getting all user posts
    @Autowired
    private DreamPostService dreamPostService;

    @RequestMapping(value="/getallpost")
    public List<DreamPostDTO> getAllPost() {

        //we use an Iterator interface to retrieve elements one by one
        Iterable<DreamPost> lAllPost = dreamPostService.getAllPost();
        Iterator<DreamPost> lIterator = lAllPost.iterator();
        List<DreamPostDTO> dtoList = new ArrayList<>();

        // Traversing the list in forward direction
        while (lIterator.hasNext()){
            DreamPost lCurrentDreamPost= lIterator.next();
            DreamPostDTO dto = new DreamPostDTO();
            dto = dto.populateDreamPostDTO(lCurrentDreamPost);
            dtoList.add(dto);
        }
        return dtoList;
    }
}
