

import Expenses from './components/Expenses/Expenses';
import react,{useState} from 'react';
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
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses item = {expenses} />
    </div>
      
  );
}

export default App;
