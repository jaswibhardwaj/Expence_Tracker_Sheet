document.addEventListener('DOMContentLoaded', () => {
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseDateInput = document.getElementById('expense-date');
    const expenseCategorySelect = document.getElementById('expense-category');
    const expenseList = document.getElementById('expense-list');
    const totalExpenseElement = document.getElementById('total-expense');
    const addExpenseButton = document.getElementById('add-expense');
  
    // Load expenses from localStorage
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
    // Render expenses
    function renderExpenses() {
      expenseList.innerHTML = '';
      let totalExpense = 0;
  
      expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${expense.name}</span>
          <span>Rs.${expense.amount.toFixed(2)}</span>
          <span>${expense.date}</span>
          <span>${expense.category}</span>
          <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(li);
        totalExpense += parseFloat(expense.amount);
      });
  
      totalExpenseElement.textContent = totalExpense.toFixed(2);
    }
  
    // Add expense
    function addExpense() {
      const name = expenseNameInput.value.trim();
      const amount = expenseAmountInput.value.trim();
      const date = expenseDateInput.value;
      const category = expenseCategorySelect.value;
  
      if (name === '' || amount === '' || date === '' || isNaN(amount) || parseFloat(amount) <= 0) {
        alert('Please enter valid values for all fields');
        return;
      }
  
      const expense = {
        name,
        amount: parseFloat(amount),
        date,
        category
      };
  
      expenses.push(expense);
      localStorage.setItem('expenses', JSON.stringify(expenses));
  
      renderExpenses();
      expenseNameInput.value = '';
      expenseAmountInput.value = '';
      expenseDateInput.value = '';
    }
  
    // Delete expense
    window.deleteExpense = function(index) {
      expenses.splice(index, 1);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      renderExpenses();
    };
  
    // Initialize
    renderExpenses();
  
    // Event listeners
    addExpenseButton.addEventListener('click', addExpense);
  });
  