import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  let [filteredYear, setFilteredYear] = useState('2020');
  const filteredExpenses = props.items.filter((elem) => elem.date.getFullYear() === +filteredYear);
  const onYearChange = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearChange={onYearChange} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
