package com.example.backend.Service;

import com.example.backend.Model.ShoppingListDatabase;
import com.example.backend.Model.ShoppinglistItem;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
public class ShoppingService {

 UserDetailsService userDetailsService = new UserDetailsService() {
     @Override
     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
         return null;
     }
 };

        final ShoppingListDatabase data;

        public ShoppingService(ShoppingListDatabase data) {
            this.data = data;
        }

        public List<ShoppinglistItem> getAllItems(){
            return data.returnAll();
        }

        public ShoppinglistItem addItems(ShoppinglistItem x){
            return data.addToDatabase(x);
        }

        public ShoppinglistItem deliverItems(String x){
            return data.getTodo(x);
        }

//        public ShoppinglistItem changeDetails(String id, ShoppinglistItem toDoToChange){
//            return openList.updateToDo(id, toDoToChange);
//        }

        public ShoppinglistItem removeItems(String idToRemove){
            return data.removeToDo(idToRemove);
        }

        public String getUserDetails (Principal principal){
            final UserDetails userDetails = userDetailsService.loadUserByUsername(principal.getName());
//            final boolean isAllowed =
//                    userDetails.getAuthorities().stream()
//                            .anyMatch(g -> MongoUserDetailsService.AUTHORITY_API_READWRITE.equals(g.getAuthority()));
//            if (isAllowed){
                return "Hallo API " + principal.getName();
//            }else {
//                return "Keine Erlaubnis, Amigo!";
//            }
        }

    }

