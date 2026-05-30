package com.ecommerce.StoreFront.service;

import com.ecommerce.StoreFront.model.Category;
import com.ecommerce.StoreFront.model.Product;
import com.ecommerce.StoreFront.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getAllProductsByCategory(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }
}
