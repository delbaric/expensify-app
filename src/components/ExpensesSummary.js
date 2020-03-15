import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses';
import selectorExpensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses' ;
  const formmatedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formmatedExpensesTotal}</span></h1>
        <div className="page-header__action">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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