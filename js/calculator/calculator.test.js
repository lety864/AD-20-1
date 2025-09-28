const calculator = require('./calculator');


describe('Probando la funcion divide', () => {

  test('divide 6 / 2 to equal 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("Probando que si la division es entre 0 nos devuelva 'Infinity'", () => {
    expect(calculator.divide(6, 0)).toBe(Infinity);
  });

  test("Probando que si ambos argumentos son 0 nos retorne el mensaje", () =>{
      expect(calculator.divide(0,0)).toBe("No puedes poner 0 en los dos argumentos");
  });

});

describe('Probando la funcion multiply', () => {

  test('multiply 3 * 4 to equal 12', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });   

  test("Probando que 2 * 'hola' = NaN", () =>{
    expect(calculator.multiply(2,'hola')).toBeNaN();
  });

  test("Probando que 2 * undefined = NaN", () =>{
    expect(calculator.multiply(2,undefined)).toBeNaN();
  });

});


test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});