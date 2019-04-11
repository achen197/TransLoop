import React from 'react';
import Icon from '@material-ui/core/Icon';

const TableBody = props => {

    const rows = props.trainUpdateData.map((row, index) => {
        const circleColor = {
            background: row.color
        }
        
        return (
            <tr className="line-info" key={index}>
                <td className="line-name">
                    <div className="color-circles" style={circleColor}></div>
                    {row.name}
                </td>
                <td className="line-status">
                    <span>{row.status}</span>
                    <Icon>done</Icon>
                </td>
            </tr>
        )
    })

    return (
        <tbody>
            {rows}
        </tbody>
    )
}


export class UpdatesTable extends React.Component {
    render() {

        const { trainUpdateData } = this.props;

        return (
            <table className="table">
                <TableBody 
                    trainUpdateData={trainUpdateData}
                    // busUpdateData={busUpdateData}
                />
            </table>
        )
    }
}

export default UpdatesTable;
