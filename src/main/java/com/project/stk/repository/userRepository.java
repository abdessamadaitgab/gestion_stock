package com.project.stk.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.stk.model.user;

public interface userRepository extends JpaRepository<user, Long> {
	  Optional<user> findByUsername(String username);

	  Boolean existsByUsername(String username);

	  Boolean existsByEmail(String email);
	

}
