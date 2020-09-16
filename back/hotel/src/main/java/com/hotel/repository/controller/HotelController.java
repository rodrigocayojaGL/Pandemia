package com.hotel.repository.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import com.hotel.repository.dto.HotelnResponseDTO;

public interface HotelController {

	@GetMapping(path = "/hotel")
	ResponseEntity<HotelnResponseDTO> getPackage();
	
	
	@GetMapping(path = "/hotel/{idCiudad}")
	ResponseEntity<HotelnResponseDTO> getHotelById(Integer idCiudad);

}
