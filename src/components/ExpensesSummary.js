import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses';
import selectorExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses' ;
  const formmatedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
  
  return (
    <div>
      <h1>Viewing {expensesCount} {expenseWord} totalling {formmatedExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectorExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);