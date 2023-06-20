package com.example.garimpeii;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@CrossOrigin(origins="*", maxAge=3600, allowCredentials = "false")
@RequestMapping("/")
public class GarimpeiiApplication {

	public static void main(String[] args) {
		SpringApplication.run(GarimpeiiApplication.class, args);
	}

}
