package ar.com.techCompany.service;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import ar.com.techCompany.dto.UserDto;
import ar.com.techCompany.dto.UserInResponseDTO;
import ar.com.techCompany.repository.UserRespository;

@ExtendWith(MockitoExtension.class)
class IntegrationTest {

	@Mock
	private UserRespository userRepository;

	@InjectMocks
	private UserServiceImpl service;

	private static final String ID = "23";
	private static final String DNI = "4192834";
	private static final String LAST_NAME = "Rojas";
	private static final String NAME = "Vilma";
	private static final Integer EDAD = 21;
	UserDto user = new UserDto();

	@BeforeEach
	public void setup() {
		user.setDni(DNI);
		user.setEdad(EDAD);
		user.setLastName(LAST_NAME);
		user.setName(NAME);
	}

	@Test
	@DisplayName(value = "Test de Integración")
	void userServiceImplTest() throws Exception {

		Optional<UserDto> users = Optional.of(user);
		when(this.userRepository.findById(ID)).thenReturn(users);
		final UserInResponseDTO response = service.getUserId(ID);
		assertEquals(user, response.getUser().stream().findFirst().get());

	}

	@Test
	@DisplayName(value = "Test de Excepción")
	void userServiceImplExceptionTest() throws Exception {

		when(this.userRepository.findById(ID)).thenReturn(null);
		assertThatThrownBy(() -> {
			service.getUserId(ID);
		}).isInstanceOf(Exception.class);
	}

}