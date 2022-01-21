package com.example.backend.Model;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserMongo, String> {
    UserMongo findByUsername(String username);
    UserMongo findByMail(String mail);
}
