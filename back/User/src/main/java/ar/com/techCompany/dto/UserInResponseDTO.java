package ar.com.techCompany.dto;

import java.util.ArrayList;
import java.util.Collection;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserInResponseDTO {

	private Collection<UserDto> user;
	

    public UserInResponseDTO() {
        this.user = new ArrayList<>();
    }

    public void add(UserDto user) {
        this.user.add(user);
    }
}
