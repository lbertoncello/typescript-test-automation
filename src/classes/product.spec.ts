import { Product } from './product';

const createSut = (name: string, price: number): Product => {
	return new Product(name, price);
};

describe('Discount', () => {
	afterEach(() => jest.clearAllMocks());

	it('should have properties name and price', () => {
		/*
		 * --- SUT (System Under Test) ---
		 * Convenção de nomenclatura para a instância da classe que
		 * está sendo testada.
		 */
		const sut = createSut('Camiseta', 49.9);

		expect(sut).toHaveProperty('name', 'Camiseta');
		expect(sut.price).toBeCloseTo(49.9);
	});
});
