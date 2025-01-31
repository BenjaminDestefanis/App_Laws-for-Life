//import { sum } from "./math-1";
const sum = require('./math-1')


describe("Pruebas de matemáticas básicas", () => {
    test("Suma", () => {
        expect(sum(3, 5)).toBe(8);
    });

    /* test("Resta", () => {
        expect(resta(10, 4)).toBe(6);
    });

    test("Multiplicación", () => {
        expect(multiplicacion(2, 3)).toBe(6);
    });

    test("División", () => {
        expect(division(10, 2)).toBe(5);
        expect(() => division(5, 0)).toThrow("No se puede dividir por cero");
    });

    test("Potencia", () => {
        expect(potencia(2, 3)).toBe(8);
    });

    test("Raíz cuadrada", () => {
        expect(raizCuadrada(9)).toBe(3);
        expect(() => raizCuadrada(-4)).toThrow("No se puede calcular la raíz de un número negativo");
    });

    test("Es par", () => {
        expect(esPar(4)).toBe(true);
        expect(esPar(7)).toBe(false);
    });

    test("Es primo", () => {
        expect(esPrimo(7)).toBe(true);
        expect(esPrimo(10)).toBe(false);
    });

    test("Máximo común divisor", () => {
        expect(maximoComunDivisor(12, 8)).toBe(4);
    });

    test("Mínimo común múltiplo", () => {
        expect(minimoComunMultiplo(4, 6)).toBe(12);
    }); */
});
