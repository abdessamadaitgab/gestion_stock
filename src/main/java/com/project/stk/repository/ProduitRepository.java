package com.project.stk.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.stk.model.Commande;
import com.project.stk.model.Product;
import com.project.stk.model.Role;

public interface ProduitRepository extends  JpaRepository<Product, Long>  {
	List<Product> findByType(String type);
	Product getById(Long id);


}
