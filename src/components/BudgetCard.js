import React from 'react';
import { Button, Card, ProgressBar } from 'react-bootstrap';
import { currencyFormatter } from '../utils';

export default function BudgetCard({ name, amount, max, gray }) {
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
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal">
          <div className="me-2">{name}</div>
          <div>
            {currencyFormatter.format(amount)}
            <span className="text-muted fs-6 ms-1">
              / {currencyFormatter.format(max)}
            </span>
          </div>
        </Card.Title>
        <ProgressBar variant={getProgressBarVariant(amount, max)} min={0} max={max} now={amount} />
        <div className='p-1 m-3'>
          <Button className='btn btn-sm m-1 px-4 bg-white' variant='outline-primary'>Add Expense</Button>
          <Button className='btn btn-sm m-1 px-4 bg-white' variant='outline-secondary'>View Expenses</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
