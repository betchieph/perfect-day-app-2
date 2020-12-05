import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';
import Dublin from './Components/Images/Dublin.jpg';
import Antarctica from './Components/Images/Antarctica.jpg';
import Riodejenero from './Components/Images/Riodejenero.jpg';
import Safari from './Components/Images/Safari.jpg';
import Sydney from './Components/Images/Sydney.jpg';
import Tokyo from './Components/Images/Tokyo.jpg';
import Yellowstone from './Components/Images/Yellowstone.jpg';
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
          <Card type="travel" title="USA, North America" makeChoice={this.makeChoice} imgurl={Yellowstone}/>
          <Card type="travel" title="Brazil, South America" makeChoice={this.makeChoice} imgurl={Riodejenero}/>
          <Card type="travel" title="South Africa, Africa" makeChoice={this.makeChoice} imgurl={Safari}/>
          <Card type="travel" title="Ireland, Europe" makeChoice={this.makeChoice} imgurl={Dublin}/>
          <Card type="travel" title="Japan, Asia" makeChoice={this.makeChoice} imgurl={Tokyo}/>
          <Card type="travel" title="Sydney, Australia" makeChoice={this.makeChoice} imgurl={Sydney}/>
          <Card type="travel" title="Mt. Vinson, Antarctica" makeChoice={this.makeChoice} imgurl={Antarctica}/>
        </div>
        <button onClick={() => {this.makeChoice("travel", "USA, North America")}}>USA, North America</button>
        <button onClick={() => {this.makeChoice("travel", "Japan")}}>Japan</button>
        <button onClick={() => {this.makeChoice("travel", "Mt. Vinson")}}>Mt. Vinson</button>
      </div>
    );
  }
}
export default App;
      
