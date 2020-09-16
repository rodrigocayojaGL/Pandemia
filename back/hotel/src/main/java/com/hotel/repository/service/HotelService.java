package com.hotel.repository.service;

import com.hotel.repository.dto.HotelnResponseDTO;

public interface HotelService {
	
	HotelnResponseDTO getHoteles();
	
	HotelnResponseDTO findHoteles(Integer ciudad);
}
