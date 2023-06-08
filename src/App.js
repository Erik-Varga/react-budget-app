
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';

import Footer from './components/Footer';
import './App.css';
import BudgetCard from './components/BudgetCard';

function App() {
  return (
    <div className='card d-flex flex-column justify-content-center align-items-center gap-1 m-2 p-2 text-center'>
      <div className='container p-4 shadow-sm'>
        <h3 className='fw-bold'>Budgets</h3>
        <div className='p-1 mb-2'>
          <Button className='btn btn-sm m-1 px-4' variant='primary'>Add Budget</Button>
          <Button className='btn btn-sm m-1 px-4' variant='outline-primary'>Add Expense</Button>
        </div>

          <div style={{
            // display: "grid",
            // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            // gap: "1rem",
            // alignItems: "flex-start"
          }}>
          <BudgetCard name="Entertainment" amount={200} max={1000} gray />

          </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
