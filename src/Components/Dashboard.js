import React from 'react';
function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h2>Chill.  Relax.  Unwind.</h2>
      <div className="choice-group">
        <p className="choice">1st Destination: {props.FirstDestination}</p>
        <p className="choice">2nd Destination: {props.SecondDestination}</p>
        <p className="choice">3rd Destination: {props.ThirdDestination}</p>
        <p className="choice">4th Destination: {props.FourthDestination}</p>
      </div>
    </div>
  );
}
export default Dashboard;