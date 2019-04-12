import React from 'react';
import Icon from '@material-ui/core/Icon';

export class UpdatesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://api.tfl.gov.uk/Line/Mode/tube')
            .then(res => res.json())
            .then(json => {
                // debugger;
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    render() {
        const { isLoaded, items } = this.state;
        const circleColor = {
            background: 'pink'
        }

        if (!isLoaded) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        } else {
            return (
                <table className="table">
                    <tbody>
                        {items.map(item => (
                            <tr className="line-info" key={item.id}>
                                <td className="line-name">
                                    <div className="color-circles" style={circleColor}></div>
                                    {item.name}
                                </td>
                                <td className="line-status">
                                    {item.lineStatuses.length === 0 &&
                                        <span>Good Service</span>
                                    }
                                     {item.lineStatuses.length > 0 &&
                                        <span>{item.lineStatuses.statusSeverityDescription}</span>
                                    }
                                    <Icon>done</Icon>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
    }
}

export default UpdatesTable;
