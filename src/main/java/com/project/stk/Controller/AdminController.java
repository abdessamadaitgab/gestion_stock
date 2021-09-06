package com.project.stk.Controller;

import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.stk.Exception.ResourceNotFoundException;
import com.project.stk.model.Commande;
import com.project.stk.model.Panier;
import com.project.stk.model.Product;
import com.project.stk.model.Stock;
import com.project.stk.model.user;
import com.project.stk.repository.CommandeRepository;
import com.project.stk.repository.PanierRepository;
import com.project.stk.repository.ProduitRepository;
import com.project.stk.repository.StockRepo;
import com.project.stk.repository.userRepository;






@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
	private userRepository userrepo;
    @Autowired
    private CommandeRepository cmdrepo;
    @Autowired
    private ProduitRepository prdrepo;
    @Autowired
    private PanierRepository panierrepo;
    @Autowired
    private StockRepo stockrepo;
    
    
    
    @GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
    @GetMapping("/user")
	@PreAuthorize("hasRole('USER')or hasRole('ADMIN')")
	public String userAccess() {
		return "User Content.";
	}
	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Board.";
	}
	 
	//get all users
    @PreAuthorize("hasRole('ADMIN')")
	  @GetMapping("/users")
	    public List<user> getAllUsers(){
	    	return userrepo.findAll();
	    	
	    }
	//get all commandes
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/commandes")
	    public List<Commande> getAllCommandes(){
	    	return cmdrepo.findAll();
	    	
	    	
	    }
	  //get all stock
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/stock")
	    public List<Stock> getAllStock(){
	    	return stockrepo.findAll();
	    	
	    	
	    }
	 //get all product
	    @PreAuthorize("hasRole('ADMIN')")
		  @GetMapping("/produits")
		    public List<Product> getAllProduits(){
		    	return prdrepo.findAll();
		    	
		    }
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/commandesByUser/{id}")

	    public List<Commande> getAllCommandesbyuser(@PathVariable Long id){
	    	
           return (List<Commande>) cmdrepo.findByUserId(id);
	    }
	    
	    
	    // inserer un user
	    @PreAuthorize("hasRole('ADMIN')")
	    @PostMapping("/users")
	    public user createUser(@RequestBody	user u) {
	    	
	    	return userrepo.save(u);
	    }
	    
	    // inserer un user
	    @PreAuthorize("hasRole('ADMIN')")
	    @PostMapping("/panier/{id}/{qt}")
	    public boolean createPanier(@PathVariable Long id,@PathVariable Double qt) {
	    Commande c=cmdrepo.findTopByOrderByIdDesc();
	    user u= c.getUser();
	    Product p=prdrepo.findById(id).get();
	    
	     Panier p2=new Panier(p,c,u,qt);
	     
	     if(verifierQTE(qt,stockrepo.getById(id).getQte() ))
	    	 
	     { panierrepo.save(p2);
	    	Stock s=stockrepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Stock not exist withi id ="+id));
	    	Double a= s.getQte()-qt;
	         s.setQte(a);
	         stockrepo.save(s);
	     return true;
	     }
	     return false;
	    	
	    	
	    }
	    
	    public boolean verifierQTE(Double a,Double b) {
	    	if(a>b) {
	    		return false;
	    	}
	    	
	    	return true;
	    }
	    
	    //getQte Stockéé
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/produits/stock/{id}")
	    public Stock getquantite(@PathVariable Long id) {
	    	return stockrepo.findById(id).get();
	    }
	    
	    
	    
	    
	    //une commande à une user by id
	    @PreAuthorize("hasRole('ADMIN')")
	    @PostMapping("/commandes/{id}")
	    public Commande createCommande(@PathVariable Long id ,@RequestBody	Commande c) {
	    	user e=userrepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("user not exist withi id ="+id));

             c.setUser(e);
	    	java.sql.Date date = new java.sql.Date(Calendar.getInstance().getTime().getTime());
	    	c.setDate(date);
	    	return cmdrepo.save(c);
	    }
	    
	    //get user
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/users/{id}")
	    public ResponseEntity<user> getUserById(@PathVariable Long id) {
	    	user e=userrepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("user not exist withi id ="+id));
	    	return ResponseEntity.ok(e);
	    }
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/panier/{id}")
	    public ResponseEntity<Panier> getPanierById(@PathVariable Long id) {
	    	Panier e=panierrepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("panier not exist withi id ="+id));
	    	return ResponseEntity.ok(e);
	    }
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/panier/users/{id}")
	    public List<Panier> getPanierUserById(@PathVariable Long id) {
return panierrepo.findByUserId(id);
}
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/panier/user/{id}")
	    public List<Panier> getPanierByIdUser(@PathVariable Long id) {
	    	Commande c=cmdrepo.findTopByOrderByUserIdDesc(id);

	    	return panierrepo.findByCommandeId(c.getId());
	    }
	    
	    // get commande
	    @GetMapping("/commandes/{id}")
	    @PreAuthorize("hasRole('ADMIN')")

	    public ResponseEntity<Commande> getCommandeById(@PathVariable Long id) {
	    	Commande c=cmdrepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Command not exist withi id ="+id));
	    	return ResponseEntity.ok(c);
	    }
	    // get commande
	    @GetMapping("/commandes/last")
	    @PreAuthorize("hasRole('ADMIN')")

	    public Commande getLastCommandeById() {
	    	return cmdrepo.findTopByOrderByIdDesc();
	    }

        //get list tissu
	    @GetMapping("/produits/tissu")
	    @PreAuthorize("hasRole('ADMIN')")
	    public List<Product> getProductTiss(){
	    	return prdrepo.findByType("TISSU");
	    }
	    
	    //get list tissu
	    @GetMapping("/produits/rideau")
	    @PreAuthorize("hasRole('ADMIN')")
	    public List<Product> getProductRideau(){
	    	return prdrepo.findByType("RIDEAU");
	    }
	    //get product by id
	    // get commande
	    @GetMapping("/produits/{id}")
	    @PreAuthorize("hasRole('ADMIN')")

	    public ResponseEntity<Product> getProduitById(@PathVariable Long id) {
	    	Product c=prdrepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product not exist withi id ="+id));
	    	return ResponseEntity.ok(c);
	    }
	    @GetMapping("/stock/{id}")
	    @PreAuthorize("hasRole('ADMIN')")

	    public ResponseEntity<Stock> getStockById(@PathVariable Long id) {
	    	Stock c=stockrepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Stock not exist withi id ="+id));
	    	return ResponseEntity.ok(c);
	    }
	    

	    
	    
	    
	    //modifier user
	    @PreAuthorize("hasRole('ADMIN')")
	    @PutMapping("/users/{id}")
	    public ResponseEntity<user> updateUserById(@PathVariable Long id , @RequestBody  user u) {
	    	user e=userrepo.findById(id).orElseThrow(()->
	    	new ResourceNotFoundException("user not exist withi id ="+id));
	        e.setPrenom(u.getPrenom());
	        e.setNom(u.getNom());
	        e.setMobile(u.getMobile());
	        
	    	user updateduser=userrepo.save(e);
	    	return ResponseEntity.ok(updateduser);

	    }
	    
	    //modifier user
	    @PreAuthorize("hasRole('ADMIN')")
	    @PutMapping("/stock/{id}")
	    public ResponseEntity<Stock> updateUserById(@PathVariable Long id , @RequestBody  Stock u) {
	    	Stock e=stockrepo.findById(id).orElseThrow(()->
	    	new ResourceNotFoundException("stock not exist withi id ="+id));
	         e.setQte(u.getQte());	        
	    	Stock updatedstock=stockrepo.save(e);
	    	return ResponseEntity.ok(updatedstock);

	    }
	    //supprimer user
	    @PreAuthorize("hasRole('ADMIN')")
		@DeleteMapping("/users/{id}")
	 	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
	 		user u = userrepo.findById(id)
	 				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
	 		
	 		userrepo.delete(u);
	 		Map<String, Boolean> response = new HashMap<>();
	 		response.put("deleted", Boolean.TRUE);
	 		return ResponseEntity.ok(response);
	 	}
		//supprimer commande
	    @PreAuthorize("hasRole('ADMIN')")
		@DeleteMapping("/commandes/{id}")
	 	public ResponseEntity<Map<String, Boolean>> deleteCommande(@PathVariable Long id){
	 		Commande u = cmdrepo.findById(id)
	 				.orElseThrow(() -> new ResourceNotFoundException("Command not exist with id :" + id));
	 		
	 		cmdrepo.delete(u);
	 		Map<String, Boolean> response = new HashMap<>();
	 		response.put("deleted", Boolean.TRUE);
	 		return ResponseEntity.ok(response);
	 		
	 	}
	  //supprimer commande	    

		@DeleteMapping("/panier/{id}")
	 	public ResponseEntity<Map<String, Boolean>> deletePanier(@PathVariable Long id){
	 		Panier u = panierrepo.findById(id)
	 				.orElseThrow(() -> new ResourceNotFoundException("Panier not exist with id :" + id));
	 		
	 		panierrepo.delete(u);
	 		Map<String, Boolean> response = new HashMap<>();
	 		response.put("deleted", Boolean.TRUE);
	 		return ResponseEntity.ok(response);
	 		
	 	}
	 
	
	

}
