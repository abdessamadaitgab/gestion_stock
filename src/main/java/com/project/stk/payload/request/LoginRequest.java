package com.project.stk.payload.request;

import org.springframework.lang.NonNull;

public class LoginRequest {
    @NonNull
	private String username;
    @NonNull
	private String password;

	


	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
