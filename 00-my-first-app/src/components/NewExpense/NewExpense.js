import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [windowState, setWindowState] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    cancelButtonHandler();
  };

  const cancelButtonHandler = (event) => {
    setWindowState(windowState ? false : true);
  };

  console.log(windowState);

  return (
    <div className="new-expense">
      {!windowState && (
        <button type="button" onClick={cancelButtonHandler}>
          Add New Expense
        </button>
      )}
      {windowState && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={cancelButtonHandler} />
      )}
    </div>
  );
};

export default NewExpense;
