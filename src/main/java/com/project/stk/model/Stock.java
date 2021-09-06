package com.project.stk.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "stock")
public class Stock {
	  @Id
	    @Column(name = "product_id")
	    private Long id;

	  @Column(nullable = false) 
	  private Double Qte;
	    @OneToOne
	    @MapsId
	    @JoinColumn(name = "product_id")
	    private Product product;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Double getQte() {
			return Qte;
		}
		public void setQte(Double qte) {
			Qte = qte;
		}
		public Product getProduct() {
			return product;
		}
		public void setProduct(Product product) {
			this.product = product;
		}
	    
	    
}
