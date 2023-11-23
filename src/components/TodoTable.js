import TodoRowItem from "./TodoRowItem";
function TodoTable({listTodos, funcDelete}){
    return (
        <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                    listTodos.map((todo, idx) => {
                        return <TodoRowItem key={idx} rowNumber = {idx + 1} rowDes = {todo.rowDes} rowAssiged = {todo.rowAssiged} funcDelete = {funcDelete}></TodoRowItem>
                    })
                }
              
            </tbody>
          </table>
    );
}

export default TodoTable;