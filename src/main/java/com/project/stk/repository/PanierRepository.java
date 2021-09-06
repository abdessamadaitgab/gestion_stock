package com.project.stk.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.stk.model.Commande;
import com.project.stk.model.Panier;

public interface PanierRepository extends JpaRepository<Panier, Long> {
	List<Panier> findByCommandeId(Long commandeId);
	List<Panier> findByUserId(Long userId);


}
