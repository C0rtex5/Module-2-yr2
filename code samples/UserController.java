@RestController
public class UserController {

    @GetMapping("/users")
    public List<User> getUsers() {
        List<User> users = new ArrayList<>();
        users.add(new User("John Doe", "johndoe@example.com"));
        users.add(new User("Jane Doe", "janedoe@example.com"));
        return users;
    }
}