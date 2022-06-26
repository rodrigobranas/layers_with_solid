import Transaction from "../src/domain/entity/Transaction";

test("Deve criar uma transaction", function () {
	const transaction = new Transaction("987", 1000, 12, "credit_card");
	transaction.generateInstallments();
	expect(transaction.installments).toHaveLength(12);
	expect(transaction.installments[0].amount).toBe(83.33);
	expect(transaction.installments[11].amount).toBe(83.37);
});
