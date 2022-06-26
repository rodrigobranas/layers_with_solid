import Installment from "./Installment";

export default class Transaction {
	installments: Installment[]

	constructor (readonly code: string, readonly amount: number, readonly numberInstallments: number, readonly paymentMethod: string) {
		this.installments = [];
	}

	generateInstallments () {
		let number = 1;
		let amount = Math.round((this.amount/this.numberInstallments)*100)/100;
		let diff = Math.round((this.amount - amount*this.numberInstallments)*100)/100;
		while (number <= this.numberInstallments) {
			if (number === this.numberInstallments) {
				amount += diff;
			}
			this.installments.push(new Installment(number, amount));
			number++;
		}
	}
}
