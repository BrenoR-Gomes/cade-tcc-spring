package com.example.garimpeii.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface AdmRepository extends JpaRepository<Adm, Long> {
	
	@Query("select id, nome, email, senha from Adm where nome=:nome and senha=:senha")
	String findAdm(String nome, String senha); 
	

}
