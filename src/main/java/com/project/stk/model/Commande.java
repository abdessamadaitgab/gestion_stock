package com.project.stk.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "commande")
public class Commande implements Serializable{
	@Id
	@GeneratedValue
	private Long id;
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date date;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private user user;
	  @OneToMany(mappedBy = "commande")
	    private List<Panier> panier;
	public Commande(com.project.stk.model.user user) {
		this.user = user;
	}
	
	public Commande(Date date, com.project.stk.model.user user) {
		this.date = date;
		this.user = user;
	}
	public Commande() {
		
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public user getUser() {
		return user;
	}
	public void setUser(user user) {
		this.user = user;
	}
	
	

}
