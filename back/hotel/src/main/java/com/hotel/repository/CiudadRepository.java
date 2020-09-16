package com.hotel.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hotel.repository.entity.CiudadEntity;

@Repository
public interface CiudadRepository extends CrudRepository<CiudadEntity, Integer> {

	CiudadEntity findByIdCiudad(Integer idCiudad);

}
