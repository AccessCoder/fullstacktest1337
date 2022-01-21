package com.example.backend.Model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ShoppingListDatabase {

        //private final ArrayList<ShoppinglistItem> toDoList;
//        public ShoppingListDatabase(ArrayList<ShoppinglistItem> toDoList) {
//            this.toDoList = toDoList;
//        }

        @Autowired
        ShoppingRepository repository;

    public ShoppingListDatabase(ShoppingRepository repository) {
        this.repository = repository;
    }

    public ShoppinglistItem addToDatabase(ShoppinglistItem item){
            repository.save(item);
            return item;
        }

        public ShoppinglistItem removeToDo(String x){
            ShoppinglistItem returnValue = getTodo(x);
            repository.delete(returnValue);
            return returnValue;
        }

        public List<ShoppinglistItem> returnAll(){
            System.out.println(repository.findAll());
            return repository.findAll();
        }

        public ShoppinglistItem getTodo(String id){
            return repository.findById(id).orElseThrow();
        }

//        public ShoppinglistItem updateToDo(String id, ShoppinglistItem x){
//            removeToDo(id);
//            addToTodo(x);
//            return x;
//        }

        @Override
        public String toString() {
            return "ToDoDatabase{" +
                    "toDoList=" + "Mongo" +
                    '}';
        }
    }

