package com.project.stk.model;

import java.io.Serializable;

import javax.persistence.*;
@Entity
@Table(name = "panier")
public class Panier implements Serializable {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

	    public Panier() {
	}
		public Panier(Product product, Commande commande, Double qnt) {
		this.product = product;
		this.commande = commande;
		this.qnt = qnt;
	}
		@ManyToOne
	    @JoinColumn(name = "product_id")
	    Product product;

	   
	    
		public Panier(Long id, Product product, Commande commande, com.project.stk.model.user user, Double qnt) {
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
		public Panier(Product product, Commande commande, com.project.stk.model.user user, Double qnt) {
			super();
			this.product = product;
			this.commande = commande;
			this.user = user;
			this.qnt = qnt;
		}
		
         
		
}
