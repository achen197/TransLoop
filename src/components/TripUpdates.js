import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { UpdatesTable } from './UpdatesTable';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

export class TripUpdates extends Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;

        return (
            <div className="trip-updates">
                <h3 className="headers">Service Updates</h3>
                <AppBar
                    position="static"
                    color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth">
                        <Tab label="Train" />
                        <Tab label="Bus" />
                        <Tab label="Ferry" />
                    </Tabs>
                </AppBar>
                {value === 0 &&
                    <TabContainer>
                        <UpdatesTable 
                        />
                    </TabContainer>
                }
                {value === 1 &&
                    <TabContainer>Item Two</TabContainer>
                }
                {value === 2 && 
                    <TabContainer>Item Three</TabContainer>
                }
            </div>
        )
    }
}

export default TripUpdates;

