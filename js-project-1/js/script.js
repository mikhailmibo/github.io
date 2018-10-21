const incomeItemDescription = document.querySelector('.income__value-text');
const incomeItemValue = document.querySelector('.income__value-digit');
const incomeAdd = document.querySelector('.income__add');
let incomeItemsSumm = [];
let resultIncome = 0;

const expensesItemDescription = document.querySelector('.expenses__value-text');
const expensesItemValue = document.querySelector('.expenses__value-digit');
const expensesAdd = document.querySelector('.expenses__add');
let expensesItemsSumm = [];
let resultExpenses = 0;

const showResultIncome = document.querySelector('.income-value');
const showResultExpenses = document.querySelector('.expenses-value');
const showTotalBudget = document.querySelector('.budget-value');


function addingIncomeItem(){
	
	let itemDesc = incomeItemDescription.value;
	let itemValue = incomeItemValue.value;
	incomeItemsSumm.push(parseInt(itemValue));
	const listLi = document.querySelector('.income__items');
	let newLi = document.createElement('li');
	let deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = "  &times;";
	newLi.innerHTML = `${itemDesc} - ${itemValue}`;
	
	newLi.classList.add('income__item');
	deleteBtn.classList.add('close','delete-item','border-danger','border','rounded');
	newLi.appendChild(deleteBtn);
	listLi.appendChild(newLi);
	incomeItemDescription.value = '';
	incomeItemValue.value = '';
	console.log(incomeItemsSumm);

	resultIncome = incomeItemsSumm.reduce(function(sum, current) {
	 return sum + current;
	}, 0);
	checking(resultIncome);
	console.log(resultIncome);
	
	listLi.addEventListener('click', removeItem);
	
	function removeItem(e){
		let val = e.target;
		let digit = e.target.innerHTML;
		digit = digit.replace(/[^+\d]/g, '');
		let indexMinus = incomeItemsSumm.indexOf(parseInt(digit));
		if(indexMinus !== -1) {
			incomeItemsSumm[indexMinus] = 0;
		}
		resultIncome = incomeItemsSumm.reduce(function(sum, current) {
	 		return sum + current;
		}, 0);
		checking(resultIncome);
	
		if(val.className === 'income__item') {
			val.remove();
		}
	}
	
};

incomeAdd.addEventListener('click', addingIncomeItem);

function addingExpensesItem(){
	
	let itemDesc = expensesItemDescription.value;
	let itemValue = expensesItemValue.value;
	expensesItemsSumm.push(parseInt(itemValue));

	const listLi = document.querySelector('.expenses__items');
	let newLi = document.createElement('li');
	let deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = "  &times;";
	newLi.innerHTML = `${itemDesc} - ${itemValue}`;
	
	newLi.classList.add('income__item');
	deleteBtn.classList.add('close','delete-item','border-danger','border','rounded');
	newLi.appendChild(deleteBtn);
	listLi.appendChild(newLi);
	expensesItemDescription.value = '';
	expensesItemValue.value = '';
	console.log(expensesItemsSumm);

	resultExpenses = expensesItemsSumm.reduce(function(sum, current) {
	  return sum + current;
	}, 0);
	checking(resultExpenses);
	
	listLi.addEventListener('click', removeItem);
	
	function removeItem(e){
		let val = e.target;
		let digit = e.target.innerHTML;
		digit = digit.replace(/[^+\d]/g, '');
		var indexMinus = expensesItemsSumm.indexOf(parseInt(digit));
		if(indexMinus !== -1) {
			expensesItemsSumm[indexMinus] = 0;
		}
		resultExpenses = expensesItemsSumm.reduce(function(sum, current) {
	 		return sum + current;
		}, 0);
		checking(resultExpenses);

		if(val.className === 'income__item' || val.className === 'delete-item' ) {
			val.remove();
		}
	}
	
};

expensesAdd.addEventListener('click', addingExpensesItem);

function checking() {
showResultIncome.innerHTML = resultIncome;
showResultExpenses.innerHTML = resultExpenses;
showTotalBudget.innerHTML = resultIncome - resultExpenses;
};











