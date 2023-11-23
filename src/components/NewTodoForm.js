import React, {useState} from "react";

function NewTodoForm({funcAddTodo}){

    const [description, setDescription] = useState('');
    const [assign, setAssign] = useState('');
    
    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assign To</label>
                    <input type="text" className="form-control" required onChange={event => setAssign(event.target.value)} value={assign}></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={event => setDescription(event.target.value)} value={description}></textarea>
                </div>

                <button type="button" className="btn btn-primary mt-3" onClick={funcAddTodo.bind(this, description, assign)}>Add Todo</button>
            </form>
        </div>
    );
}

export default NewTodoForm;