package com.hotel.repository.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.repository.dto.CiudadlnResponseDTO;
import com.hotel.repository.service.CiudadService;

@RestController
public class CiudadControllerImpl implements CiudadContoller {

	private CiudadService ciudadService;

	public CiudadControllerImpl(CiudadService ciudadService) {
		super();
		this.ciudadService = ciudadService;
	}

	@Override
	public ResponseEntity<CiudadlnResponseDTO> getCiudades() {
		// TODO Auto-generated method stub
		return new ResponseEntity<>(ciudadService.getCiudades(), HttpStatus.OK);
	}

}
