package com.example.backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShoppinglistItem {

    @Id
    private String id;

    private String name;
    private boolean done;
    private int quant;

}
