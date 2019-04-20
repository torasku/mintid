import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Time from './Components/Time';
import AddHour from './Components/AddHour';
import WithdrawHour from './Components/WithdrawHour';
import fire from './fire';
import AlertBoxOver from './Components/AlertBoxOver';
import AlertBoxUnder from './Components/AlertBoxUnder';

const testuser = 'torarve';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      time: 0
    }
    this.addHour = this.addHour.bind(this);
    this.withdrawHour = this.withdrawHour.bind(this);
  }

  componentWillMount() {
    let timeRef = fire.database().ref('time');
    let time;
    timeRef.on('child_added', snapshot => {
      if (snapshot.key === 'time') {
        time = snapshot.val();
      }

      /* snapshot.forEach((childSnapshot) => {
        if (childSnapshot.key === 'time') {
          time = childSnapshot.val();
        }
      }); */

      const totalTime = {
        ...this.state,
        time: time
      }
      this.setState(totalTime);
    })
  }

  addHour() {
    const total = this.state.time + 1;
    fire.database().ref('time').set({
      username: testuser,
      time: total
    });
    const totalTime = {
      ...this.state,
      time: total
    }
    this.setState(totalTime);
  }

  withdrawHour() {
    const total = this.state.time - 1;
    fire.database().ref('time').set({
      username: testuser,
      time: total
    });
    const totalTime = {
      ...this.state,
      time: total
    }
    this.setState(totalTime);
  }
  
  isFlexOver(time) {
    if (time >= 10) {
      return true;
    }
  }

  isFlexUnder(time) {
    if (time <= -10 ) {
      return true;
    }
  }



  render() {
    const {addHour, withdrawHour, isFlexOver, isFlexUnder } = this; 
    return (
        <div className="App">
            <Header />
            <div className="Main-grid">
              <WithdrawHour onWithdrawHour={withdrawHour} />
              <Time time={this.state.time} />
              <AddHour onAddHour={addHour}/>
              {isFlexOver(this.state.time) ? <AlertBoxOver /> : null } 
              {isFlexUnder(this.state.time) ? <AlertBoxUnder /> : null }
            </div>
        </div>
    );
  }
}

export default App;
