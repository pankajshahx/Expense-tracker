

import Expenses from './components/Expenses/Expenses';
import react,{useState} from 'react';
import './index.css'
import NewExpense from './components/NewExpenses/NewExpense';


let prev_expenses = [];

const App = ()=> {

  const [expenses,setExpenses] = useState(prev_expenses);
  

  const addExpenseHandler=(expense)=>{
      const updated_expenses = [expense, ...expenses];
      setExpenses(updated_expenses);
  };

  return (
    <div>
      <h1 className="heading">Expense Tracker</h1>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses item = {expenses} />
    </div>
      
  );
}

export default App;
