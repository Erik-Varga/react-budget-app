
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';

import Footer from './components/Footer';
import BudgetCard from './components/BudgetCard';
import { BsCashCoin } from 'react-icons/bs';
import AddBudgetModule from './components/AddBudgetModule';

function App() {
  return (
    <Container>
      <div className='card d-flex flex-column justify-content-center align-items-center gap-1 m-1 p-1 text-center border-0'>
        <div className='container p-4 shadow-sm'>
          <h3 className='fw-bold'>
            
            Budget App&nbsp;<BsCashCoin />
          </h3>
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
        <AddBudgetModule show={false} />
      <Footer />
    </div>
    </Container>
  );
}

export default App;
