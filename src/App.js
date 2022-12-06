import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

const DUMMMY_EXPENSES= [
  {id: "e1",title: "Toilet Paper",amount: 94.12,date: new Date(2020, 7, 14)},
  {id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {id: "e3",title: "Car Insurance",amount: 294.67,date: new Date(2021, 2, 28),},
  {id: "e4",title: "New Desk (Wooden)",amount: 450,date: new Date(2021, 5, 12),}
];

function App() {
   const[expenses,setExpenses]=useState(DUMMMY_EXPENSES);  



  
  const addExpenseDataHandler = (expense) =>{
 setExpenses((prevState)=> {return [...prevState,expense]});
  }

  return (
    <div>
       <NewExpense  onAddExpense={addExpenseDataHandler}/>
      <div>
        <Expenses items={expenses}/>
      </div>
    </div>
  );
}

export default App;

// To pass array we can 
// on this side we are using items so on other side props.items[1].title ans passing array just by using curly braces 
// now props has expenses array but said as title so we say props.items[1].key_name