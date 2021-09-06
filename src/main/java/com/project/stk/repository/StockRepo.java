package com.project.stk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.stk.model.Product;
import com.project.stk.model.Stock;
import com.project.stk.model.user;

public interface StockRepo  extends JpaRepository<Stock, Long>{
	Stock getById(Long id);
}
