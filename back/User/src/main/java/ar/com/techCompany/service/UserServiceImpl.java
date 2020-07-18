package ar.com.techCompany.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.techCompany.dto.UserDto;
import ar.com.techCompany.dto.UserInResponseDTO;
import ar.com.techCompany.repository.UserRespository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRespository userRepository;

	@Override
	public UserInResponseDTO getUserId(final String id) throws Exception {

		UserInResponseDTO response = new UserInResponseDTO();

		try {
			final Optional<UserDto> users = userRepository.findById(id);
			if (users.isPresent()) {
				response.add(users.get());
			}
		} catch (Exception e) {
            throw new Exception();
		}

		return response;
	}

}
