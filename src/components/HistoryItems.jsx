import React from 'react';

function HistoryItems({ history, onDelete, color }) {
  let myStyle = {
    color: color,
  };

  return (
    <ul className="list-group mb-3">
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h5 style={myStyle} className="my-1">{history.desc}</h5>
        </div>
        <span className="text-body-secondary">${history.amount}
          <button onClick={() => onDelete(history)} className='btn btn-danger mx-4 btn-sm'>Delete</button>
        </span>
      </li>
    </ul>
  );
}

export default HistoryItems;
