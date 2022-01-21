package com.example.backend.Controller;

import com.example.backend.Model.LoginData;
import com.example.backend.Service.JWTUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@RestController
@RequestMapping("/auth")
public class LoginController {

    final JWTUtils jwtUtils;
    final AuthenticationManager authenticationManager;

    public LoginController(JWTUtils jwtUtils, AuthenticationManager authenticationManager) {
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginData loginData){
        try{
            //Hat Berechtigung sich anzumelden?
            final UsernamePasswordAuthenticationToken token =
                    new UsernamePasswordAuthenticationToken(loginData.getName(), loginData.getPassword());
            authenticationManager.authenticate(token);
            //Wenn ja = JWT Token wiedergeben!
            return jwtUtils.createToken(new HashMap<>(), loginData.getName());
        }catch (AuthenticationException e){
            //Wenn nein = Fehlermeldung!
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials!");
        }
    }
}
