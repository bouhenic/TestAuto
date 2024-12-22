const Calculator = require('../src/calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        test('devrait additionner deux nombres positifs', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        test('devrait gérer les nombres négatifs', () => {
            expect(calculator.add(-1, -2)).toBe(-3);
        });
    });

    describe('subtract', () => {
        test('devrait soustraire deux nombres', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
        });
    });

    describe('multiply', () => {
        test('devrait multiplier deux nombres', () => {
            expect(calculator.multiply(4, 3)).toBe(12);
        });
    });

    describe('divide', () => {
        test('devrait diviser deux nombres', () => {
            expect(calculator.divide(6, 2)).toBe(3);
        });

        test('devrait lever une erreur lors d\'une division par zéro', () => {
            expect(() => calculator.divide(4, 0)).toThrow('Division par zéro impossible');
        });
    });
});