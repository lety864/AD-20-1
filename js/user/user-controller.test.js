const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

describe("Probando la funcion add()", () => {

  test("Porbar la funcion add() que veririfica un usuario que no esta en la lista de usuarios", () => {
    expect(userController.getUsers().length).toBe(0);
  });

  test("add user to userController", () => {    
      let user = new User(1234,"Santiago", "santiago@generation.org");
      userController.add(user);    
      expect(userController.getUsers()).toContain(user);
  });

});

describe("Probando la funcion remove()", () => {

  test("Porbar la funcion remove() que veririfica un usuario que esta en la lista de usuarios", () => {
    expect(userController.getUsers().length).toBe(1);
  });

  test('remove user to userController', () => {    
      let user = new User(1234,"Santiago", "santiago@generation.org");
      userController.add(user);    
      userController.remove(user);
      expect(userController.users).not.toContain(user);
    });

});

describe("Probando la funcion findByEmail()", () => {

  test("Porbar la funcion findByEmail()", () => {
    let user = new User(456,"Ana", "example@gmail.com");
    userController.add(user);
    expect(userController.findByEmail("example@gmail.com")).toBe(user);
  });

  test("Porbar la funcion findByEmail() con un email que no existe", () => {
    expect(userController.findByEmail("alguien@outlook.com")).toBeUndefined();
  });

});

describe("Probando la funcion findById()", () => {

  test("Porbar la funcion findById()", () => {
    let user = new User(789,"hikaru", "hikaur@hotmail.com");
    userController.add(user);
    expect(userController.findById(789)).toBe(user);
  });

  test("Porbar la funcion findById() con un id que no existe", () => {
    expect(userController.findById(999)).toBeUndefined();
  });

});



