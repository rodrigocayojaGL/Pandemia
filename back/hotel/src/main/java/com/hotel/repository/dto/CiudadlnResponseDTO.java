package com.hotel.repository.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class CiudadlnResponseDTO {

	private List<CiudadDTO> ciudades;

	public CiudadlnResponseDTO() {
		this.ciudades = new ArrayList<>();
	}

	public void add(CiudadDTO ciudad) {
		this.ciudades.add(ciudad);
	}

}
