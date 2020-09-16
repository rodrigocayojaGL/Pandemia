package com.hotel.repository.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity(name = "ciudad")
public class CiudadEntity implements Serializable{
	private static final long serialVersionUID = 7121288244523228549L;
	
	@Id
	private Integer idCiudad;
	private String nombre;
	private String imagen;
	private Integer idProvincia;

}
