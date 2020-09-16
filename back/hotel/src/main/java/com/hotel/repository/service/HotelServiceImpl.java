package com.hotel.repository.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hotel.repository.HotelRepository;
import com.hotel.repository.dto.HotelDTO;
import com.hotel.repository.dto.HotelnResponseDTO;
import com.hotel.repository.entity.HotelEntity;

@Service
public class HotelServiceImpl implements HotelService {

	private HotelRepository hotelRepository;

	public HotelServiceImpl(HotelRepository hotelRepository) {
		super();
		this.hotelRepository = hotelRepository;
	}

	@Override
	public HotelnResponseDTO getHoteles() {
		HotelnResponseDTO response = new HotelnResponseDTO();
		Iterable<HotelEntity> findHoteles = hotelRepository.findAll();
		findHoteles.forEach(entity -> {
			response.getHoteles().add(HotelDTO.entityToDto(entity));
		});

		return response;
	}

	@Override
	public HotelnResponseDTO findHoteles(Integer ciudad) {
		HotelnResponseDTO response = new  HotelnResponseDTO();
		final List<HotelEntity> ciudades = hotelRepository.findByIdCiudad(ciudad);
		ciudades.forEach(entity->{
			response.add(HotelDTO.entityToDto(entity));
		});
		return response;
	}

}
