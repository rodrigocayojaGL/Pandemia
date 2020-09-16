package com.hotel.repository.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.repository.dto.HotelnResponseDTO;
import com.hotel.repository.service.HotelService;

@RestController
public class HotelControllerImpl implements HotelController {

	private HotelService hotelService;
	
	public HotelControllerImpl(HotelService hotelService) {
		super();
		this.hotelService = hotelService;
	}

	@Override
	public ResponseEntity<HotelnResponseDTO> getPackage() {
		
		return new ResponseEntity<>(hotelService.getHoteles(),HttpStatus.OK);
	}

	@Override
	public ResponseEntity<HotelnResponseDTO> getHotelById(@PathVariable (value  = "idCiudad")Integer idCiudad) {
		
		return new ResponseEntity<>(hotelService.findHoteles(idCiudad),HttpStatus.OK);
	}

}
