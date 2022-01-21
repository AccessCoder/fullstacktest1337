package com.example.backend.Controller;

import com.example.backend.Model.ShoppinglistItem;
import com.example.backend.Service.ShoppingService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ShoppinglistController {

    public ShoppinglistController(ShoppingService service) {
        this.service = service;
    }

    private final ShoppingService service;


    @GetMapping("/einkaufsliste")
    public List<ShoppinglistItem> getAll() {
        return service.getAllItems();
    }

    @PutMapping("/einkaufsliste")
    public ShoppinglistItem addItem(@RequestBody ShoppinglistItem x, String token) {
        return service.addItems(x);
    }

    UserDetailsService userDetailsService = new UserDetailsService() {
        @Override
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            return null;
        }
    };
    @GetMapping("/user/me")
    public String getUserDetails (Principal principal){
        final UserDetails userDetails = userDetailsService.loadUserByUsername(principal.getName());
        return "Hallo API " + principal.getName();
    }

    @GetMapping("/einkaufsliste/{id}")
    public ShoppinglistItem getItem(@PathVariable String id) {
        return service.deliverItems(id);
    }

//    @PutMapping("/einkaufsliste/{id}/update")
//    public ShoppinglistItem putUpdate(@PathVariable String id, @RequestBody ShoppinglistItem x) {
//        return service.changeDetails(id, x);
//    }
//
//    @PutMapping("/einkaufsliste/{id}")
//    public ShoppinglistItem putNext(@PathVariable String id, @RequestBody ShoppinglistItem x) {
//        return service.changeDetails(id, x);
//    }

    @DeleteMapping("/einkaufsliste/{id}")
    public ShoppinglistItem deleteItem(@PathVariable String id) {
        return service.removeItems(id);
    }

}

