package com.dream.app.demo.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.dream.app.demo.models.AppUser;
import com.dream.app.demo.service.AppUserService;
import com.dream.app.demo.transferobject.AppUserDTO;

@RestController
public class LoginController {
    //We create a Controller for login to facilitate registering and
    //authenticating a user.
    @Autowired
    private AppUserService appUserService;

    @PostMapping(value="/register")
    public AppUser register(@RequestBody AppUserDTO appUserDTO) throws Exception {
        AppUser appUser = appUserDTO.populateAppUser();
        appUser = appUserService.registerUser(appUser);
        return appUser;
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<AppUser> authenticate(@RequestBody @Valid AppUser appUser) {
        AppUser user = appUserService.getUserByEmail(appUser.getEmail());
        return new ResponseEntity<AppUser>(user, HttpStatus.OK);
    }

}
