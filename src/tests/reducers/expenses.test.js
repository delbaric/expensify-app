import expensesRedcuer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesRedcuer(undefined, { type: '@@init' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesRedcuer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesRedcuer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesRedcuer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
  const amount = 122000;
  const action = { 
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesRedcuer(expenses, action);
  expect(state[1].amount).toBe(amount);
});


test('should not edit expense if id not found', () => {
  const amount = 122000;
  const action = { 
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesRedcuer(expenses, action);
  expect(state).toEqual(expenses);
});
