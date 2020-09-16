package com.hotel.repository.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import com.hotel.repository.dto.CiudadlnResponseDTO;

public interface CiudadContoller {

	@GetMapping(path = "/ciudad")
	ResponseEntity<CiudadlnResponseDTO> getCiudades();
}
