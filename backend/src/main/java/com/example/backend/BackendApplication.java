package com.example.backend;

import com.example.backend.Model.ShoppingRepository;
import com.example.backend.Model.UserMongo;
import com.example.backend.Model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = ShoppingRepository.class)
public class BackendApplication implements CommandLineRunner {

    @Autowired
    private UserRepository repository;

    @Autowired
    PasswordEncoder encoder;
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        repository.deleteAll();

        //add Users
        String encodedPassword = encoder.encode("tom123");
        repository.save(new UserMongo("tom", encodedPassword, List.of(new SimpleGrantedAuthority(MongoUserDetailsService.AUTHORITY_API_READWRITE))));
        encodedPassword = encoder.encode("tommy123");
        repository.save(new UserMongo("tommy", encodedPassword, List.of(new SimpleGrantedAuthority(MongoUserDetailsService.AUTHORITY_API_READWRITE))));

        // find Users
        System.out.println("Customers found with findAll():");
        System.out.println("-------------------------------");
        for (UserMongo user : repository.findAll()) {
            System.out.println(user);
        }
        System.out.println();

        // fetch an individual customer
        System.out.println("Customer found with findByUsername('tommy'):");
        System.out.println("--------------------------------");
        System.out.println(repository.findByUsername("tommy"));

    }
}
