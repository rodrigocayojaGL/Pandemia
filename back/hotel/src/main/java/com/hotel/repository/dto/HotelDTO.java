package com.hotel.repository.dto;

import com.hotel.repository.entity.HotelEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class HotelDTO {

	private Integer idHotel;
	private String nombre;
	private String calidad;
	private Integer idCiudad;
	private Integer precio;

	public static HotelDTO entityToDto(HotelEntity entity) {
		return HotelDTO.builder().calidad(entity.getCalidad()).idCiudad(entity.getIdCiudad()).idHotel(entity.getIdHotel())
				.nombre(entity.getNombre()).precio(entity.getPrecio()).build();
	}
}
