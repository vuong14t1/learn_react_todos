import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable.js';
import NewTodoForm from './components/NewTodoForm.js';

function App() {
  const [listTodos, setListTodo] = useState( [
    { rowNumber: 1, rowDes: "Feed dogs", rowAssiged: "Eric"},
    { rowNumber: 2, rowDes: "Feed dogs 1", rowAssiged: "Eric 1"},
    { rowNumber: 3, rowDes: "Feed dogs 2", rowAssiged: "Eric 2"},
  ]);

  const funcAddTodo = (des, assign) => {
    if(des === '' || assign === '') return;
    if(listTodos.length > 0){
      const newTodo = {
        rowNumber: listTodos.length + 1, rowDes: des, rowAssiged: assign
      };
      setListTodo([...listTodos, newTodo]);
    }
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your todos
        </div>

        <div className='card-body'>
          <TodoTable listTodos={listTodos}></TodoTable>
          <NewTodoForm funcAddTodo={funcAddTodo}></NewTodoForm>
        </div>

      </div>
    </div>
  );
}

export default App;
