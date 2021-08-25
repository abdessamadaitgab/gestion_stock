package com.project.stk.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
import com.project.stk.model.user;
import com.project.stk.repository.userRepository;






@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
	private userRepository userrepo;
	 
	//get all users
	  @GetMapping("/users")
	    public List<user> getAllUsers(){
	    	return userrepo.findAll();
	    	
	    }
	    // inserer un user
	    @PostMapping("/users")
	    public user createUser(@RequestBody	user u) {
	    	
	    	return userrepo.save(u);
	    }
	    //get user
	    @GetMapping("/users/{id}")
	    public ResponseEntity<user> getUserById(@PathVariable Long id) {
	    	user e=userrepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("user not exist withi id ="+id));
	    	return ResponseEntity.ok(e);
	    }
	    //modifier user
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
	    //supprimer user
		@DeleteMapping("/users/{id}")
	 	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
	 		user u = userrepo.findById(id)
	 				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
	 		
	 		userrepo.delete(u);
	 		Map<String, Boolean> response = new HashMap<>();
	 		response.put("deleted", Boolean.TRUE);
	 		return ResponseEntity.ok(response);
	 	}
	 
	
	

}
