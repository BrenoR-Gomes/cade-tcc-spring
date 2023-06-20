package com.example.garimpeii.control;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.garimpeii.model.Adm;
import com.example.garimpeii.service.AdmService;

@RestController
@CrossOrigin(origins="*", maxAge=3600, allowCredentials = "false")
@RequestMapping("/Adm")
public class AdmController {

	final AdmService admService;
	
	public AdmController(AdmService _admService) {
		this.admService = _admService;
	}

	// @GET
	@GetMapping()
		public ResponseEntity<List<Adm>> getAllAdms() {
			return ResponseEntity.status(HttpStatus.OK)
					.body(admService.findAll());
		}
		
		//POST
		@PostMapping()
		public ResponseEntity<Object> saveAdm (Adm adm) {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(admService.save(adm));
		}
		

		//GET
		//@GetMapping("/logar/{nome}/{senha}")
		@PostMapping("/logar")
		//@ResponseBody
		public ResponseEntity<Object> logar(@RequestBody Object corpo) {
			System.out.println("dados: " + corpo.nome + "  " + corpo.senha);
			
			//adm.setNome(admService.findAdm(nome, senha));
			String teste = admService.findAdm(corpo.nome, corpo.senha);
			String[] parcial = teste.split(",");
			Adm adm = new Adm(Long.parseLong(parcial[0]), parcial[1], parcial[2], parcial[3]);
			System.out.println(adm.getNome());
			
			return ResponseEntity.status(HttpStatus.OK)
					.body(adm);
		}
		
}
