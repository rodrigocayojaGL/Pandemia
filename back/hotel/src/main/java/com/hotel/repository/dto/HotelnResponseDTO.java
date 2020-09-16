package com.hotel.repository.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class HotelnResponseDTO {

	private List<HotelDTO> hoteles;

	public HotelnResponseDTO() {
		this.hoteles = new ArrayList<>(); 
	}
	
	public void add(HotelDTO hotel) {
		this.hoteles.add(hotel);
	}
	
}
