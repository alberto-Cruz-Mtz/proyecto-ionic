package bearhug.management.com.apiionic.service;

public interface IUserService {

    boolean login(String email, String password);

    boolean register(String email, String password);
}
