function TodoRowItem({rowNumber, rowDes, rowAssiged, funcDelete}){
    return (
        <tr >
            <th scope='row'>{rowNumber}</th>
            <td>{rowDes}</td>
            <td>{rowAssiged}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={funcDelete.bind(this, rowNumber)}>Delete</button>
            </td>
        </tr>
              
    );
}

export default TodoRowItem;