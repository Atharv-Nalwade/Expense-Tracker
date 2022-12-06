import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

import { useState } from "react";

function ExpenseItem(props) {

  // function clickHandler(){
  //   alert("clicked");
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler} > Change Title</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;

// to ISo Strign is used as date is object and not a string

// on other hand I am sending title date and amount and so on this side I have to use similar names but say props.passed_data
//  and recevivve props as parameter for function props is just a sword we can use any name here but convention is to use props

// To create a wrapper component we can create a diffrent compoent and use us like a dic to encapsulate 
// the conetnt in between 

// onClick={() => {console.log("Clicked")}}