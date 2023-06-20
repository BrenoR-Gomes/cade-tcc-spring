package com.example.garimpeii.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.example.garimpeii.model.Adm;
import com.example.garimpeii.model.AdmRepository;

import jakarta.transaction.Transactional;

@Service
public class AdmService {

	// obj repository

	final AdmRepository admRepository;

	// injecao de dependencia
	public AdmService(AdmRepository _admRepository) {
		this.admRepository = _admRepository;
	}

	// select * from adm

	public List<Adm> findAll() {
		return admRepository.findAll();
	} 
	
	// buscar 1 adm
	public Optional<Adm> findOneAdm(Example<Adm> adm) {
		return admRepository.findBy(null, null);
	}
	
	// buscar por nome
	public String findAdm(String nome, String senha) {
		return admRepository.findAdm(nome, senha);
	}

	// insert
	@Transactional
	public Adm save(Adm adm) {
		return admRepository.save(adm);
	}
}
