package ar.com.techCompany.dto;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import ar.com.techCompany.dto.UserDto;

class UnitTest {

	private UserDto user;
	private static final String DNI = "41928273";
	private static final String NAME = "Rodrigo";
	private static final Integer EDAD = 25;

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
	
	@Test
	@DisplayName(value = "Test de unitario")
	void test() {
		UserDto user = new UserDto();
		user.setDni(DNI);
		user.setEdad(EDAD);
		System.out.println(user.getDni());

		assertEquals(DNI, user.getDni());
		assertTrue(user.getEdad() > 20);
		assertFalse(user.getEdad() < 25);
		assertNull(user.getLastName());
		assertNotNull(user);
	}
}









