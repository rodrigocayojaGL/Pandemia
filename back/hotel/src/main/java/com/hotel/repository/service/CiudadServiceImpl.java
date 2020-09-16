package com.hotel.repository.service;

import org.springframework.stereotype.Service;

import com.hotel.repository.CiudadRepository;
import com.hotel.repository.dto.CiudadDTO;
import com.hotel.repository.dto.CiudadlnResponseDTO;
import com.hotel.repository.entity.CiudadEntity;

@Service
public class CiudadServiceImpl implements CiudadService {

	private CiudadRepository ciudadRepository;

	public CiudadServiceImpl(CiudadRepository ciudadRepository) {
		super();
		this.ciudadRepository = ciudadRepository;
	}

	@Override
	public CiudadlnResponseDTO getCiudades() {
		CiudadlnResponseDTO response = new CiudadlnResponseDTO();
		Iterable<CiudadEntity> findHoteles = ciudadRepository.findAll();
		findHoteles.forEach(entity -> {
			response.getCiudades().add(CiudadDTO.entityToDto(entity));
		});

		return response;
	}

}
