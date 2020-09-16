package com.hotel.repository.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity(name = "hotel")
public class HotelEntity implements Serializable {

	private static final long serialVersionUID = 566557404844677784L;
	@Id
	private Integer idHotel;
	private String nombre;
	private String calidad;
	private Integer idCiudad;
	private Integer precio;

}
