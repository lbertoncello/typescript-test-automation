import { Messaging } from './messaging';

const createSut = (): Messaging => {
	return new Messaging();
};

describe('Persistency', () => {
	afterEach(() => jest.clearAllMocks());

	it('should return undefined', () => {
		/*
		 * --- SUT (System Under Test) ---
		 * Convenção de nomenclatura para a instância da classe que
		 * está sendo testada.
		 */
		const sut = createSut();

		expect(sut.sendMessage('test')).toBeUndefined();
	});

	it('should call console.log once', () => {
		const sut = createSut();
		/*
		 * --- Spy (um tipo de mock) ---
		 * "Espiona" o objeto selecionada para verificar o comportamento tido por ele.
		 * Ex.: verificar se um método foi chamado, quantas vezes foi chamado etc.
		 */
		const consoleSpy = jest.spyOn(console, 'log');

		sut.sendMessage('test');

		expect(consoleSpy).toHaveBeenCalledTimes(1);
	});

	it('should call console.log with "Mensagem enviada:" and msg', () => {
		const sut = createSut();
		const consoleSpy = jest.spyOn(console, 'log');

		sut.sendMessage('test');

		expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'test');
	});
});
