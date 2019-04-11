import React, { Component } from 'react';
import './App.scss';
import { NavBar } from './components/NavBar';
import { TripPlanner } from './components/TripPlanner';
import { TripUpdates } from './components/TripUpdates';
import { ServiceAlerts } from './components/ServiceAlerts';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar
          title="TransLoop"
        />
        <div className="container-full">
        <div className="row">
          <div className="col-4 no-pad">
            <TripPlanner />
          </div>
          <div className="col-5 no-pad">
            <TripUpdates />
          </div>
          <div className="col-3 no-pad">
            <ServiceAlerts />
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
