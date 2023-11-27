import React from "react";

export const TodoRowItem: React.FC<{rowNumber: number, rowDes: string, rowAssiged: string , funcDelete: Function}> = ({rowNumber, rowDes, rowAssiged, funcDelete}) =>{
    const deleteItem = () => {
        funcDelete(rowNumber);
    }
    return (
        <tr >
            <th scope='row'>{rowNumber}</th>
            <td>{rowDes}</td>
            <td>{rowAssiged}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={deleteItem}>Delete</button>
            </td>
        </tr>
              
    );
}
