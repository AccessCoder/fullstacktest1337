package com.example.backend.Model;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingRepository extends MongoRepository<ShoppinglistItem, String> {

    ShoppinglistItem findByName(String name);
    ShoppinglistItem findByDone(Boolean done);

}
