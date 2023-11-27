import React, {useState} from "react";

export const NewTodoForm: React.FC<{funcAddTodo: Function}> = ({funcAddTodo}) => {

    const [description, setDescription] = useState('');
    const [assign, setAssign] = useState('');

    const handleAddTodo = () => {
        funcAddTodo(description, assign);
    }
    
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

                <button type="button" className="btn btn-primary mt-3" onClick={handleAddTodo}>Add Todo</button>
            </form>
        </div>
    );
}
