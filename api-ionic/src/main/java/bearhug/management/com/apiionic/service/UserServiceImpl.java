package bearhug.management.com.apiionic.service;

import bearhug.management.com.apiionic.entity.UserEntity;
import bearhug.management.com.apiionic.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;

    @Override
    public boolean login(String email, String password) {
        Optional<UserEntity> user = userRepository.findByEmailAndPassword(email, password);
        return user.isPresent();
    }

    @Override
    public boolean register(String email, String password) {
        boolean exists = userRepository.existsByEmail(email);
        if (!exists) {
            userRepository.save(UserEntity.builder().email(email).password(password).build());
            return true;
        }
        return false;
    }
}
