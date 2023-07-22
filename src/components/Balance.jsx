import React from 'react';

function Balance(props) {
  const formattedTotalBalance = props.totalBalance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="container my-3">
      <h2>Total Balance: ${formattedTotalBalance}</h2>
      <button onClick={props.balanceZero} className="btn btn-primary my-2">
        Clear Balance
      </button>
    </div>
  );
}

export default Balance;
