package ar.com.techCompany.dto;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

class ExampleParameterizedTest {

	private UserDto user;
	private static final String DNI = "41928273";
	private static final String NAME = "Rodrigo";
	private static final String NAME_D = "Diana";


	@ParameterizedTest
	@ValueSource(strings = {NAME, NAME_D})
	void parameterizedTest(String date) {
		System.out.println(date);
		assertNotNull(date);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	

	@BeforeEach
	public void setUp() {
		this.user = new UserDto();
		user.setDni(DNI);
		user.setName(NAME);
	}
	
	@Test
	@DisplayName(value = "Obtener DNI")
	void getDniTest() {
		assertEquals(DNI, user.getDni());
	}
	
	@Test
	@DisplayName(value = "Obtener Nombre")
	void getNameTest() {
		assertEquals(NAME, user.getName());
	}
	

}









