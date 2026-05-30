package com.ecommerce.StoreFront.controller;

import com.ecommerce.StoreFront.model.Product;
import com.ecommerce.StoreFront.service.CategoryService;
import com.ecommerce.StoreFront.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {

        return productService.getAllProducts();
    }

    @GetMapping("/category/{categoryId}")
    public List<Product> getAllProductsByCategory(@PathVariable Long categoryId) {

        return productService.getAllProductsByCategory(categoryId);
    }



}
