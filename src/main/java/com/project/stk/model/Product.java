package com.project.stk.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public  class Product implements Serializable {
	   @Id
	    @GeneratedValue(strategy=GenerationType.AUTO)
	    private Long id;
		@Column(nullable = false)
	    private String description;
		@Column(nullable = false)
	    private String image;	
		@Column(nullable = false)
         private String type;
		@Column(nullable = false)
	    private String gamme;
		@Column(nullable = false)
	    private Double prix;
		  @OneToMany(mappedBy = "product")
		    private List<Panier> panier;
		  
		  @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)
		    @PrimaryKeyJoinColumn
		    private Stock stock;  

	    
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		public String getGamme() {
			return gamme;
		}
		public void setGamme(String gamme) {
			this.gamme = gamme;
		}
		public Double getPrix() {
			return prix;
		}
		public void setPrix(Double prix) {
			this.prix = prix;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getImage() {
			return image;
		}
		public void setImage(String image) {
			this.image = image;
		}
}

	    
