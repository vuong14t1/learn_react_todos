function TodoRowItem({rowNumber, rowDes, rowAssiged}){
    return (
        <tr >
            <th scope='row'>{rowNumber}</th>
            <td>{rowDes}</td>
            <td>{rowAssiged}</td>
        </tr>
              
    );
}

export default TodoRowItem;