import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "FirstDestination": "Please select a destination",
      "SecondDestination": "Please select a destination",
      "ThirdDestination": "Please select a destination",
      "FourthDestination": "Please select a destination",
      "Status": 0,

      
    
    };
  }  
makeChoice = (type, choice) => {
    this.setState(state => {
      if(state.Status === 0) {
          state["FirstDestination"] = choice
          state.Status = 1
      }
     else if(state.Status === 1) {
          state["SecondDestination"] = choice
          state.Status = 2
      }
     else if(state.Status === 2) {
          state["ThirdDestination"] = choice
          state.Status = 3
      }
     else if(state.Status === 3) {
          state["FourthDestination"] = choice
          state.Status = 4
      }    
      return state
    })
  }
         
  render() {

    return (
      <div className="App">
        <Navbar />
        <Dashboard FirstDestination={this.state.FirstDestination} SecondDestination={this.state.SecondDestination} ThirdDestination={this.state.ThirdDestination} FourthDestination={this.state.FourthDestination}/>
        <div className="card-container">
          <Card type="travel" title="USA, North America" makeChoice={this.makeChoice} />
          <Card type="travel" title="Brazil, South America" makeChoice={this.makeChoice} />
          <Card type="travel" title="South Africa, Africa" makeChoice={this.makeChoice} />
          <Card type="travel" title="Ireland, Europe" makeChoice={this.makeChoice} />
          <Card type="travel" title="Japan, Asia" makeChoice={this.makeChoice} />
          <Card type="travel" title="Sydney, Australia" makeChoice={this.makeChoice}/>
          <Card type="travel" title="Mt. Vinson, Antarctica" makeChoice={this.makeChoice} />
        </div>
        <button onClick={() => {this.makeChoice("travel", "USA, North America")}}>USA, North America</button>
        <button onClick={() => {this.makeChoice("travel", "Japan")}}>Japan</button>
        <button onClick={() => {this.makeChoice("travel", "Mt. Vinson")}}>Mt. Vinson</button>
      </div>
    );
  }
}
export default App;
      
