//  this are emums
enum Profile{
    Admin ="Admin",
    User = "User",
    Guest = "Guest"
}

interface User {
name: string;
role: Profile;

}

const user1: User = {
    name: "John Doe",
    role: Profile.Admin
};
const user2: User={
    name: "Jane Smith",
    role: Profile.User
}

console.log(`User: ${user2.name}, Role: ${user2.role}`);