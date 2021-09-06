package com.project.stk.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.stk.model.Commande;

public interface CommandeRepository extends JpaRepository<Commande, Long> {
	List<Commande> findByUserId(Long userId);
	Commande findTopByOrderByIdDesc();
	@Query(value = "SELECT * FROM Commande where user_id=id ORDER BY Commande.id  LIMIT 1",
		       nativeQuery = true)
	Commande findTopByOrderByUserIdDesc(Long userId);


}
