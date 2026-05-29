package com.ecommerce.StoreFront.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "category_id",
                cascade = CascadeType.ALL,
                fetch = FetchType.LAZY
    )
    private Set<Product> products;
}
