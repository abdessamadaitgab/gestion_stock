package com.project.stk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.stk.model.Admin;


public interface AdminRepository extends JpaRepository<Admin, Long> {

}
