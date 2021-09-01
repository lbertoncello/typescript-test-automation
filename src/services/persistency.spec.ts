describe('TESTANDO ALGUMA COISA', () => {
	describe('TESTANDO ALGUMA OUTRA COISA', () => {
		it('descrição do teste (IT)', () => {
			const number = 1;

			expect(number).toBe(1);
		});
	});

	describe('TESTANDO ALGUMA OUTRA COISA NOVAMENTE', () => {
		test('descrição do teste (TEST)', () => {
			const nome = 'Lucas';

			expect(nome).toBe('Lucas');
		});
	});
});
