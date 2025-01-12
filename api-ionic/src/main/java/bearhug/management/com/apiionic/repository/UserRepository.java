package bearhug.management.com.apiionic.repository;

import bearhug.management.com.apiionic.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmailAndPassword(String email, String password);
    boolean existsByEmail(String email);
}
