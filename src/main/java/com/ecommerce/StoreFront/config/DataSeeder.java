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

        Category sports = new Category();
        sports.setName("Sports");

        Category beauty = new Category();
        beauty.setName("Beauty");

        entityManager.persist(electronics);
        entityManager.persist(clothing);
        entityManager.persist(books);
        entityManager.persist(homeAndKitchen);
        entityManager.persist(sports);
        entityManager.persist(beauty);

        // --- Electronics (8 products) ---
        createProduct("iPhone 15 Pro",
                "Latest Apple flagship with titanium build and A17 Pro chip",
                999.99,
                "https://images.unsplash.com/photo-1696446702183-cbd96a1ae340?w=400&h=400&fit=crop",
                electronics);

        createProduct("Samsung 4K QLED TV",
                "55-inch smart display with vivid QLED picture quality",
                799.99,
                "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop",
                electronics);

        createProduct("Sony WH-1000XM5",
                "Industry-leading noise cancelling wireless headphones",
                349.99,
                "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
                electronics);

        createProduct("MacBook Air M2",
                "Supercharged by the next-generation M2 chip, all day battery",
                1099.99,
                "https://images.unsplash.com/photo-1611186871525-b0f74e62067b?w=400&h=400&fit=crop",
                electronics);

        createProduct("iPad Pro 12.9\"",
                "The ultimate iPad experience with M2 chip and Liquid Retina XDR display",
                1299.99,
                "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
                electronics);

        createProduct("Canon EOS R50",
                "Lightweight mirrorless camera perfect for creators and enthusiasts",
                679.99,
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
                electronics);

        createProduct("Apple Watch Series 9",
                "The most powerful Apple Watch with double tap gesture and S9 chip",
                399.99,
                "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
                electronics);

        createProduct("Portable Power Bank 20000mAh",
                "Fast charging power bank with USB-C and dual USB-A ports",
                49.99,
                "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
                electronics);

        // --- Clothing (8 products) ---
        createProduct("Classic White T-Shirt",
                "100% premium cotton comfortable everyday essential tee",
                19.99,
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
                clothing);

        createProduct("Slim Fit Jeans",
                "Modern slim fit denim in dark indigo wash, great stretch",
                49.99,
                "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
                clothing);

        createProduct("Winter Puffer Jacket",
                "Warm and lightweight quilted puffer for cold days",
                89.99,
                "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=400&h=400&fit=crop",
                clothing);

        createProduct("Running Sneakers",
                "Lightweight breathable mesh sneakers built for daily training",
                74.99,
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
                clothing);

        createProduct("Linen Summer Dress",
                "Breezy linen blend midi dress, perfect for warm weather",
                64.99,
                "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&h=400&fit=crop",
                clothing);

        createProduct("Wool Overcoat",
                "Classic tailored wool blend overcoat in camel tone",
                199.99,
                "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop",
                clothing);

        createProduct("Leather Belt",
                "Full-grain leather belt with a polished silver buckle",
                29.99,
                "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop",
                clothing);

        createProduct("Baseball Cap",
                "Structured 6-panel cap with embroidered logo, adjustable strap",
                24.99,
                "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
                clothing);

        // --- Books (6 products) ---
        createProduct("Clean Code",
                "A handbook of agile software craftsmanship by Robert C. Martin",
                34.99,
                "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
                books);

        createProduct("The Pragmatic Programmer",
                "Your journey to mastery by David Thomas & Andrew Hunt",
                39.99,
                "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop",
                books);

        createProduct("Atomic Habits",
                "An easy and proven way to build good habits by James Clear",
                16.99,
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
                books);

        createProduct("Spring Boot in Action",
                "Covers Spring Boot essentials for modern Java developers",
                44.99,
                "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=400&fit=crop",
                books);

        createProduct("Deep Work",
                "Rules for focused success in a distracted world by Cal Newport",
                18.99,
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop",
                books);

        createProduct("Designing Data-Intensive Apps",
                "The big ideas behind reliable, scalable and maintainable systems",
                52.99,
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=400&fit=crop",
                books);

        // --- Home & Kitchen (6 products) ---
        createProduct("Air Fryer 5.8Qt",
                "Large capacity digital air fryer with 8 preset cooking programs",
                89.99,
                "https://images.unsplash.com/photo-1648170645290-5ec4ad1c9e7b?w=400&h=400&fit=crop",
                homeAndKitchen);

        createProduct("Ceramic Knife Set",
                "6-piece professional ceramic knife set with bamboo block",
                59.99,
                "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop",
                homeAndKitchen);

        createProduct("Coffee Maker",
                "Programmable 12-cup drip coffee maker with thermal carafe",
                49.99,
                "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=400&h=400&fit=crop",
                homeAndKitchen);

        createProduct("Robot Vacuum",
                "Smart mapping robot vacuum with auto-empty base and app control",
                299.99,
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
                homeAndKitchen);

        createProduct("Scented Candle Set",
                "Set of 4 hand-poured soy wax candles with calming fragrances",
                34.99,
                "https://images.unsplash.com/photo-1602607168604-ccac1cd8b060?w=400&h=400&fit=crop",
                homeAndKitchen);

        createProduct("Bamboo Cutting Board",
                "Extra-large organic bamboo cutting board with juice groove",
                39.99,
                "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=400&h=400&fit=crop",
                homeAndKitchen);

        // --- Sports (6 products) ---
        createProduct("Yoga Mat Premium",
                "6mm thick non-slip eco-friendly yoga and exercise mat",
                45.99,
                "https://images.unsplash.com/photo-1601925228604-a4df1f8c9af2?w=400&h=400&fit=crop",
                sports);

        createProduct("Adjustable Dumbbells",
                "Space-saving adjustable dumbbell set from 5 to 52.5 lbs",
                299.99,
                "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
                sports);

        createProduct("Cycling Helmet",
                "Aerodynamic road cycling helmet with MIPS safety technology",
                89.99,
                "https://images.unsplash.com/photo-1557803175-c2b3db3d8558?w=400&h=400&fit=crop",
                sports);

        createProduct("Tennis Racket Pro",
                "Graphite frame professional tennis racket with vibration dampener",
                129.99,
                "https://images.unsplash.com/photo-1617083934555-ac4e0c3e9e4d?w=400&h=400&fit=crop",
                sports);

        createProduct("Resistance Bands Set",
                "Set of 5 latex resistance bands with handles and door anchor",
                24.99,
                "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
                sports);

        createProduct("Water Bottle Insulated",
                "32oz stainless steel vacuum insulated bottle keeps drinks cold 24hrs",
                34.99,
                "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
                sports);

        // --- Beauty (6 products) ---
        createProduct("Vitamin C Serum",
                "10% Vitamin C brightening face serum with hyaluronic acid",
                29.99,
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
                beauty);

        createProduct("Facial Roller Set",
                "Rose quartz face roller and gua sha tool for lymphatic drainage",
                22.99,
                "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
                beauty);

        createProduct("Perfume Eau de Parfum",
                "Elegant floral and woody fragrance, long-lasting 100ml bottle",
                79.99,
                "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop",
                beauty);

        createProduct("Electric Face Cleanser",
                "Sonic facial cleansing brush with 3 modes and waterproof design",
                59.99,
                "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
                beauty);

        createProduct("Lip Care Set",
                "Nourishing lip balm and scrub set with SPF 30 protection",
                14.99,
                "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=400&fit=crop",
                beauty);

        createProduct("Hair Care Bundle",
                "Sulfate-free shampoo and conditioner set for dry and damaged hair",
                44.99,
                "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=400&fit=crop",
                beauty);

        System.out.println("✅ Data seeding complete: 6 categories, 40 products loaded.");
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