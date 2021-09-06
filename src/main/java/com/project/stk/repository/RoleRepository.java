package com.project.stk.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.stk.model.ERole;
import com.project.stk.model.Role;

public interface RoleRepository extends  JpaRepository<Role, Long> {
	  Optional<Role> findByName(ERole name);
	}