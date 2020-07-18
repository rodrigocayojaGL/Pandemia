package ar.com.techCompany.service;

import ar.com.techCompany.dto.UserInResponseDTO;

public interface UserService {

	UserInResponseDTO getUserId(String id) throws Exception;
}
