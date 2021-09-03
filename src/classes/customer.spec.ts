import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
	firstName: string,
	lastName: string,
	cpf: string,
): IndividualCustomer => {
	return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
	name: string,
	cnpj: string,
): EnterpriseCustomer => {
	return new EnterpriseCustomer(name, cnpj);
};

describe('Discount', () => {
	afterEach(() => jest.clearAllMocks());

	it('should have first name, lastname and cpf', () => {
		const sut = createIndividualCustomer(
			'Lucas',
			'Bertoncello',
			'111.111.111-11',
		);

		expect(sut).toHaveProperty('firstName', 'Lucas');
		expect(sut).toHaveProperty('lastName', 'Bertoncello');
		expect(sut).toHaveProperty('cpf', '111.111.111-11');
	});

	it('should have methods to get name and idn for individual customers', () => {
		const sut = createIndividualCustomer(
			'Lucas',
			'Bertoncello',
			'111.111.111-11',
		);

		expect(sut.getName()).toBe('Lucas Bertoncello');
		expect(sut.getIDN()).toBe('111.111.111-11');
	});

	it('should have first name cnpj', () => {
		const sut = createEnterpriseCustomer('Udemy', '222');

		expect(sut).toHaveProperty('name', 'Udemy');
		expect(sut).toHaveProperty('cnpj', '222');
	});

	it('should have methods to get name and idn for enterprise customers', () => {
		const sut = createEnterpriseCustomer('Udemy', '222');

		expect(sut.getName()).toBe('Udemy');
		expect(sut.getIDN()).toBe('222');
	});
});
