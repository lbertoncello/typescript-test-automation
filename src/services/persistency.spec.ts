import { Persistency } from './persistency';

describe('Persistency', () => {
	afterEach(() => jest.clearAllMocks());

	it('should return undefined', () => {
		/*
		 * --- SUT (System Under Test) ---
		 * Convenção de nomenclatura para a instância da classe que
		 * está sendo testada.
		 */
		const sut = new Persistency();

		expect(sut.saveOrder()).toBeUndefined();
	});

	it('should call console.log once', () => {
		const sut = new Persistency();
		/*
		 * --- Spy (um tipo de mock) ---
		 * "Espiona" o objeto selecionada para verificar o comportamento tido por ele.
		 * Ex.: verificar se um método foi chamado, quantas vezes foi chamado etc.
		 */
		const consoleSpy = jest.spyOn(console, 'log');

		sut.saveOrder();

		expect(consoleSpy).toHaveBeenCalledTimes(1);
	});

	it('should call console.log with "Pedido salvo com sucesso..."', () => {
		const sut = new Persistency();
		const consoleSpy = jest.spyOn(console, 'log');

		sut.saveOrder();

		expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
	});
});
