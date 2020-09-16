package com.hotel.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hotel.repository.entity.HotelEntity;

@Repository
public interface HotelRepository extends CrudRepository<HotelEntity, Integer> {

	List<HotelEntity> findByIdCiudad(Integer idCiudad);
}
