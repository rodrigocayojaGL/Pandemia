package ar.com.techCompany.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ar.com.techCompany.dto.UserDto;

@Repository
public interface UserRespository extends CrudRepository<UserDto, String> {
	

}
