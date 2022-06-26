import Transaction from "../../domain/entity/Transaction";
import TransactionRepository from "../../domain/repository/TransactionRepository";

export default class TransactionMemoryRepository implements TransactionRepository {
	transactions: Transaction[];

	constructor () {
		this.transactions = [];
	}

	async save(transaction: Transaction): Promise<void> {
		this.transactions.push(transaction);
	}

	async get(code: string): Promise<Transaction> {
		const transaction = this.transactions.find(transaction => transaction.code === code);
		if (!transaction) throw new Error();
		return transaction;
	}

}