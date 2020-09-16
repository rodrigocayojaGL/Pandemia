package com.hotel.repository.dto;

import com.hotel.repository.entity.CiudadEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CiudadDTO {

	private Integer idCiudad;
	private String nombre;
	private String imagen;
	private Integer idProvincia;

	public static CiudadDTO entityToDto(CiudadEntity entity) {
		return CiudadDTO.builder().idCiudad(entity.getIdCiudad()).idProvincia(entity.getIdProvincia())
				.nombre(entity.getNombre()).imagen(entity.getImagen()).build();
	}
}
