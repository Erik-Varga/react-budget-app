import React from 'react';
import { Button, Card, ProgressBar } from 'react-bootstrap';
import { currencyFormatter } from '../utils';

export default function BudgetCard({ name, amount, max, gray, hideButtons, onAddExpenseClick, onViewExpensesClick }) {
  const classNames = []
  if (amount > max) {
    classNames.push('bg-danger', 'bg-opacity-10')
  } else if (gray) {
    classNames.push('bg-light')
  }

  function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < 0.5) return 'primary'
    if (ratio < 0.75) return 'warning'
    return 'danger'
  }

  return (
    <div className="mb-2">
      <Card className={classNames.join(" ")}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal">
            <div className="me-2">{name}</div>
            <div>
              {currencyFormatter.format(amount)}
              {max && (<span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(max)}
              </span>)}
            </div>
          </Card.Title>

          {max && (<ProgressBar
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />)}

          {!hideButtons && (<div className="p-1 m-3">
            <Button
              className="btn btn-sm m-1 px-4 bg-white text-dark"
              variant="secondary"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button
              className="btn btn-sm m-1 px-4 bg-white text-dark"
              variant="outline-success"
              onClick={onViewExpensesClick}
            >
              View Expenses
            </Button>
          </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
