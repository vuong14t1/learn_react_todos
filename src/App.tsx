import React, {useState} from 'react';
import './App.css';
import {TodoTable} from './components/TodoTable';
import {NewTodoForm} from './components/NewTodoForm';

function App() {
  const [isEnableAdd, setEnableAdd] = useState(false);

  const [listTodos, setListTodo] = useState( [
    { rowNumber: 1, rowDes: "Feed dogs", rowAssiged: "Eric"},
    { rowNumber: 2, rowDes: "Feed dogs 1", rowAssiged: "Eric 1"},
    { rowNumber: 3, rowDes: "Feed dogs 2", rowAssiged: "Eric 2"},
  ]);

  const funcAddTodo = (des: string, assign: string) => {
    if(des === '' || assign === '') return;
    let newTodo;
    if(listTodos.length > 0){
      newTodo = {
        rowNumber: listTodos.length + 1, rowDes: des, rowAssiged: assign
      };
      
    }else{
      newTodo = {
        rowNumber: 1, rowDes: des, rowAssiged: assign
      };
    }

    setListTodo([...listTodos, newTodo]);
  }

  const funcDeleteTodo = (idx: number) => {
    const result = listTodos.filter(todo => todo.rowNumber !== idx);
    setListTodo(result);
  }

  const funcSetEnableAdd = () => {
    setEnableAdd(!isEnableAdd);
  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your todos
        </div>

        <div className='card-body'>
          <TodoTable listTodos={listTodos} funcDelete = { funcDeleteTodo }></TodoTable>
          <button className='btn btn-primary' onClick={ funcSetEnableAdd }>{isEnableAdd ? "Close Add Todo" : "Open Add Todo"}</button>
          {isEnableAdd && (<NewTodoForm funcAddTodo={ funcAddTodo }></NewTodoForm>)}
        </div>

      </div>
    </div>
  );
}

export default App;
