package com.project.stk.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "panierfinale")
public class PanierFinale {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

	    public PanierFinale() {
	}
		public PanierFinale(Product product, Commande commande, Double qnt) {
		this.product = product;
		this.commande = commande;
		this.qnt = qnt;
	}
		@ManyToOne
	    @JoinColumn(name = "product_id")
	    Product product;

	   
	    
		public PanierFinale(Long id, Product product, Commande commande, com.project.stk.model.user user, Double qnt) {
			super();
			this.id = id;
			this.product = product;
			this.commande = commande;
			this.user = user;
			this.qnt = qnt;
		}
		public user getUser() {
			return user;
		}
		public void setUser(user user) {
			this.user = user;
		}
		@ManyToOne
	    @JoinColumn(name = "commande_id")
	    Commande commande;
	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    user user;
		@Column(nullable = false) 
         private Double qnt;
		public Commande getCommande() {
			return commande;
		}
		public void setCommande(Commande commande) {
			this.commande = commande;
		}
		public Product getProduct() {
			return product;
		}
		public void setProduct(Product product) {
			this.product = product;
		}
		public Double getQnt() {
			return qnt;
		}
		public void setQnt(Double qnt) {
			this.qnt = qnt;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public PanierFinale(Product product, Commande commande, com.project.stk.model.user user, Double qnt) {
			super();
			this.product = product;
			this.commande = commande;
			this.user = user;
			this.qnt = qnt;
		}
		

}
