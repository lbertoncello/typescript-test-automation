describe('Primitive values', () => {
	it('should test jest assertions', () => {
		const number = 10;

		expect(number).toBeLessThan(11);
		expect(number).toBeLessThanOrEqual(10);

		expect(number).toBeCloseTo(10.001, 1);
		expect(number).toBeCloseTo(9.996);

		expect(number).not.toBeNull();

		expect(number).toHaveProperty('toString');
	});

	it('should split tests', () => {
		const number = 10;

		expect(number).toBe(10);
		expect(number).toEqual(10); // Checagem para ser usada com objetos

		expect(number).not.toBeFalsy();
		expect(number).toBeTruthy();

		expect(number).toBeGreaterThan(9);
		expect(number).toBeGreaterThanOrEqual(10);
	});
});

describe('Objects', () => {
	it('should test jest assertions with objects', () => {
		const person = { name: 'Luiz', age: 30 };
		const anotherPerson = { ...person };

		expect(person).toEqual(anotherPerson); // Diferente de toBe(...)! Compara as propriedades do objeto.
		expect(person).toHaveProperty('age', 30);
		expect(person).not.toHaveProperty('lastName');

		expect(person.name).toBe('Luiz');
	});
});
