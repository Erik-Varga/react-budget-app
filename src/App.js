import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import Footer from './components/Footer';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './context/BudgetsContext';
import BudgetCard from './components/BudgetCard';
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard';
import AddBudgetModule from './components/AddBudgetModule';
import AddExpenseModule from './components/AddExpenseModule';
import ViewExpensesModule from './components/ViewExpensesModule';
import { BsCashCoin } from 'react-icons/bs';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [viewExpensesModuleBudgetId, setViewExpensesModalBudgetId] = useState();
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
    <Container>
      <div className="card d-flex flex-column justify-content-center align-items-center gap-1 m-1 p-1 text-center border-0">
        <div className="container p-4 shadow-sm">
          <h3 className="fw-bold">
            Budget App&nbsp;
            <BsCashCoin />
          </h3>
          <div className="p-1 mb-2">
            <Button
              className="btn btn-sm m-1 px-4"
              variant="primary"
              onClick={() => setShowAddBudgetModal(true)}
            >
              Add Budget
            </Button>
            <Button
              className="btn btn-sm m-1 px-4"
              variant="outline-secondary"
              onClick={openAddExpenseModal}
            >
              Add Expense
            </Button>
          </div>

          <div
            style={
              {
                // display: "grid",
                // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                // gap: "1rem",
                // alignItems: "flex-start"
              }
            }
          >
            {budgets.map((budget) => {
              const amount = getBudgetExpenses(budget.id).reduce(
                (total, expense) => total + expense.amount,
                0
              );
              return (
                <BudgetCard
                  key={budget.id}
                  name={budget.name}
                  amount={amount}
                  max={budget.max}
                  gray
                  onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                  onViewExpensesClick={() =>
                    setViewExpensesModalBudgetId(budget.id)
                  }
                />
              )
            })}
            <UncategorizedBudgetCard
              onAddExpenseClick={openAddExpenseModal}
              onViewExpensesClick={() =>
                setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
              }
            />
            <TotalBudgetCard />
          </div>
        </div>

        <AddBudgetModule
          show={showAddBudgetModal}
          handleClose={() => {
            setShowAddBudgetModal(false);
          }}
        />

        <AddExpenseModule
          show={showAddExpenseModal}
          defaultBudgetId={addExpenseModalBudgetId}
          handleClose={() => {
            setShowAddExpenseModal(false);
          }}
        />

        <ViewExpensesModule
          budgetId={viewExpensesModuleBudgetId}
          handleClose={() => setViewExpensesModalBudgetId()}
        />

        <Footer />
      </div>
    </Container>
  );
}

export default App;
