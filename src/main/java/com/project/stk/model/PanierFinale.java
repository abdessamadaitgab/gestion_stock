package com.project.stk.model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class PanierFinale {
	  @Id
	    Long id;

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

	    @ManyToOne
	    @JoinColumn(name = "commande_id")
	    Commande commande;
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

}
