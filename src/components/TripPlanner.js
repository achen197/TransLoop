import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class TripPlanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://api.tfl.gov.uk/Journey/JourneyResults/Westminster%2C%20London%20SW1A%201AA%2C%20UK/to/Big%20Ben%2C%20Westminster%2C%20London%20SW1A%200AA%2C%20UK?nationalSearch=false&date=20190411&time=1230&journeyPreference=LeastTime&walkingSpeed=Average')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    render() {
        const { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="trip-planner">
                    <h2 className="headers">Trip Planner</h2>
                    <form>
                        <div className="form-group">
                            <label for="formGroupExampleInput">From</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Address, Landmark or Station Name" />
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">To</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Full Address, Landmark or Station Name" />
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput3">Date</label>
                            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="10/04/2019" />
                        </div>
                        <Button variant="contained" color="primary">
                            Find Journey
                    </Button>
                    </form>
                    {/* <div>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>
                                    {item.place.lat}
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>
            )
        }
    }
}