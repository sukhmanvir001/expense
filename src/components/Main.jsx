import React, { useState } from 'react';

function Main(props) {
  const [amount, setAmount] = useState(0);
  const [expense, setExpense] = useState(0);
  const [amountDesc, setAmountDesc] = useState('');
  const [expenseDesc, setExpenseDesc] = useState('');

  return (
    <div className="accordion w-50 my-5 accordion-flush" id="accordionFlushExample">
       <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Add Amount to Balance
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Amount</label>
              <input type="text" value={amount} className="form-control" onChange={(e) => { setAmount(e.target.value) }} id="exampleFormControlInput1" placeholder="Enter Amount" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
              <input type="text" value={amountDesc} className="form-control" onChange={(e) => { setAmountDesc(e.target.value) }} id="exampleFormControlInput1" placeholder="Enter Description" />
            </div>
            <button onClick={() =>{ props.addAmountBtn(amount, amountDesc); setAmount('') ; setAmountDesc('')}} className="btn btn-success">Add Amount</button>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Remove Expense from Balance
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Expense</label>
              <input type="text" value={expense} className="form-control" onChange={(e) => { setExpense(e.target.value) }} id="exampleFormControlInput1" placeholder="Enter Expense" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
              <input type="text" value={expenseDesc} className="form-control" onChange={(e) => { setExpenseDesc(e.target.value) }} id="exampleFormControlInput1" placeholder="Enter Description" />
            </div>
            <button onClick={() => {props.addExpenseBtn(expense, expenseDesc); setExpense(''); setExpenseDesc('')}} className="btn btn-danger">Add Expense</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
