import React from 'react'
import { useBudgets } from '../context/BudgetsContext'
import BudgetCard from './BudgetCard'

export default function TotalBudgetCard() {
    const { expenses, budgets } = useBudgets()
    const amount = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    )
    const max = budgets.reduce(
        (total, expense) => total + expense.max,
        0
    )
    if (max === 0) return null

  return (
    <BudgetCard amount={amount} name='Total' gray max={max} hideButtons />
  )
}
