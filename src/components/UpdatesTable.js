import React from 'react';
import { checkPropTypes } from 'prop-types';

const TableBody = props => {

    const rows = props.trainUpdateData.map((row, index) => {
        const circleColor = {
            background: row.color
        }
        return (
            <tr key={index}>
                <td className="line-name">
                    <div className="color-circles" style={circleColor}></div>
                    {row.name}
                </td>
                <td>{row.status}</td>
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
                />
            </table>
        )
    }
}

export default UpdatesTable;
