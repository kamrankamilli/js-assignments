class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.coins = 0;
    this.courses = [];
  }

  login() {
    console.log(`${this.name} logged in`);
    return this;
  }
  logout() {
    console.log(`${this.name} has logged out`);
    return this;
  }
}

class Moderator extends User {
  addCoins(user, num_coins) {
    user.coins = num_coins + user.coins;

    console.log(user.coins + " coins added to a user");
  }
}
class Admin extends Moderator {
  addCourse(user, course) {
    user.courses.push(course);
    console.log(user);
  }
  deleteCourse(user, course) {
    user.courses = user.courses.filter((e) => {
      return e.course != user.course;
    });
  }
}

let user1 = new User("Dilip", 25, "dilip@gmail.com");
let user2 = new User("Krishnan", 24, "k@gmai.com");
let mod = new Moderator("Berlin", 24, "b@gmail.com");
let admin = new Admin("Rio", 25, "r@gmail.com");

user1.login();
user2.login();

//user1.logout();
//user2.logout();
mod.addCoins(user1, 50);
admin.addCourse(user1, "Javascript");
admin.addCourse(user2, "Python");
//admin.deleteCourse(user2,'Python');
