package ar.com.techCompany.cotroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ar.com.techCompany.dto.UserInResponseDTO;
import ar.com.techCompany.service.UserService;

@RestController
public class Controller {

	@Autowired
	private UserService userService;
	
	@GetMapping("/user")
	public ResponseEntity<UserInResponseDTO>  name(@RequestParam(name = "dni")String dni) throws Exception {
		final UserInResponseDTO response = userService.getUserId(dni);
		return new ResponseEntity<>(response, HttpStatus.ACCEPTED);

	}

}
