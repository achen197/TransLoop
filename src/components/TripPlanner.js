import React from 'react';
import Button from '@material-ui/core/Button';

export const TripPlanner = () => (
    
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
    </div>
)