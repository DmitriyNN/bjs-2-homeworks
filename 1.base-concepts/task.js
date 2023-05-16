"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const d = Math.pow(b, 2) - 4 * a * c;
	console.log(d);
	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const interestRate = percent / 100 / 12;
	const сredit = amount - contribution;
	const monthlyPay = сredit * (interestRate + (interestRate / (Math.pow((1 + interestRate), countMonths) - 1)));
	let totalSum = monthlyPay * countMonths;
	totalSum = Number(totalSum.toFixed(2));
	return totalSum;
}