package com.project.stk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.stk.model.user;

public interface userRepository extends JpaRepository<user, Long> {
	

}
