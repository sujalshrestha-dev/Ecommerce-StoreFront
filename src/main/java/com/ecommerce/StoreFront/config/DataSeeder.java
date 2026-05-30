package com.ecommerce.StoreFront.config;

import com.ecommerce.StoreFront.model.Category;
import com.ecommerce.StoreFront.model.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class DataSeeder implements CommandLineRunner {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public void run(String... args) throws Exception {


        Long count = entityManager.createQuery("SELECT COUNT(p) FROM Product p", Long.class)
                .getSingleResult();
        if (count > 0) {
            System.out.println("⚠️ Already seeded, skipping.");
            return;
        }

        // --- Categories ---
        Category electronics = new Category();
        electronics.setName("Electronics");

        Category clothing = new Category();
        clothing.setName("Clothing");

        Category books = new Category();
        books.setName("Books");

        Category homeAndKitchen = new Category();
        homeAndKitchen.setName("Home & Kitchen");

        entityManager.persist(electronics);
        entityManager.persist(clothing);
        entityManager.persist(books);
        entityManager.persist(homeAndKitchen);

        // --- Electronics Products ---
        createProduct("iPhone 15 Pro", "Latest Apple flagship smartphone with A17 chip", 999.99, "https://placehold.co/300x300?text=iPhone+15+Pro", electronics);
        createProduct("Samsung 4K TV", "55-inch QLED display with smart features", 799.99, "https://placehold.co/300x300?text=Samsung+TV", electronics);
        createProduct("Sony WH-1000XM5", "Industry-leading noise cancelling headphones", 349.99, "https://placehold.co/300x300?text=Sony+Headphones", electronics);
        createProduct("MacBook Air M2", "Supercharged by the next-generation M2 chip", 1099.99, "https://placehold.co/300x300?text=MacBook+Air", electronics);

        // --- Clothing Products ---
        createProduct("Classic White T-Shirt", "100% cotton comfortable everyday tee", 19.99, "https://placehold.co/300x300?text=White+Tee", clothing);
        createProduct("Slim Fit Jeans", "Modern slim fit denim jeans in dark blue", 49.99, "https://placehold.co/300x300?text=Slim+Jeans", clothing);
        createProduct("Winter Puffer Jacket", "Warm and lightweight puffer for cold days", 89.99, "https://placehold.co/300x300?text=Puffer+Jacket", clothing);
        createProduct("Running Sneakers", "Lightweight breathable shoes for daily runs", 74.99, "https://placehold.co/300x300?text=Sneakers", clothing);

        // --- Books Products ---
        createProduct("Clean Code", "A handbook of agile software craftsmanship by Robert C. Martin", 34.99, "https://placehold.co/300x300?text=Clean+Code", books);
        createProduct("The Pragmatic Programmer", "Your journey to mastery by David Thomas & Andrew Hunt", 39.99, "https://placehold.co/300x300?text=Pragmatic+Programmer", books);
        createProduct("Atomic Habits", "An easy and proven way to build good habits by James Clear", 16.99, "https://placehold.co/300x300?text=Atomic+Habits", books);
        createProduct("Spring Boot in Action", "Covers Spring Boot essentials for Java developers", 44.99, "https://placehold.co/300x300?text=Spring+Boot+Book", books);

        // --- Home & Kitchen Products ---
        createProduct("Air Fryer 5.8Qt", "Large capacity digital air fryer with 8 presets", 89.99, "https://placehold.co/300x300?text=Air+Fryer", homeAndKitchen);
        createProduct("Ceramic Knife Set", "6-piece professional ceramic knife set with block", 59.99, "https://placehold.co/300x300?text=Knife+Set", homeAndKitchen);
        createProduct("Coffee Maker", "Programmable 12-cup coffee maker with thermal carafe", 49.99, "https://placehold.co/300x300?text=Coffee+Maker", homeAndKitchen);
        createProduct("Robot Vacuum", "Smart mapping robot vacuum with auto-empty base", 299.99, "https://placehold.co/300x300?text=Robot+Vacuum", homeAndKitchen);

        System.out.println("✅ Data seeding complete: 4 categories, 16 products loaded.");
    }

    private void createProduct(String name, String description, Double price, String imageUrl, Category category) {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setImageUrl(imageUrl);
        product.setCategory(category);
        entityManager.persist(product);
    }
}