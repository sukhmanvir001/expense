import React from 'react';
import HistoryItems from './HistoryItems';

function HistoryCont(props) {
  return (
    <div className="col-md-5 my-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-danger">History</span>
        <button onClick={props.clearHistory} className="btn btn-primary">Clear History</button>
      </h4>
      {props.history.length === 0
        ? "No Transaction to display"
        : props.history.map((history) => (
            <HistoryItems key={history.sNo} color={props.color} history={history} onDelete={props.onDelete} />
          ))}
    </div>
  );
}

export default HistoryCont;
