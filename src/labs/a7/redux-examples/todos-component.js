// The component uses useSelector to retrieve the todos generated by todos-reducer.js

import React from "react";
// the React useState hook can be used to deal with local component state
// import useState to work with the local state
import {useState} from "react";
// import useSelector
// useDispatch hook to call reducers
import {useDispatch, useSelector} from "react-redux";
// import reducer function exported by todos-reducer
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    // retrieve todos from reducer state and assign to local todos constant
    // in todos-reducers.js: name: todos
    const todos = useSelector(state => state.todos);
    // create todo local variable
    const [todo, setTodo] = useState({do:''});
    // get dispatch to invoke reducer functions
    // handle click event of button
    // call reducer function passing new todo
    // as the payload in the action object
    const dispatch = useDispatch();
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }
    // The dispatch will send the index of the delete object we want to remove as the payload of the action object.
    const deleteTodoClickHandler = (index) => {
        // the dispatch will send the index of the delete object we want to remove as the payload of the action object
        dispatch(deleteTodo(index))
    }
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }
    // handle keystroke changes in input field
    const todoChangeHandler = (event) => {
        // get data from input field
        const doValue = event.target.value;
        // create new todo object instance and set the todo's do property
        const newTodo = {
            do: doValue
        };
        // change the local state todo variable
        setTodo(newTodo);
    }
    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {/*give a input field to type todo
                   handle keystroke to update component state
                   update the field with lastest state value*/}
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25 float-end">
                        Create
                    </button>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75"/>
                </li>
                {
                    // iterate over todos array and render a line item element for each todo object
                    // and display do property contain the todo text
                    todos.map((todo, index) =>
                        <li key={todo._id}
                            className="list-group-item">
                            <button onClick={() =>
                                deleteTodoClickHandler(index)}
                                    className="btn btn-danger float-end ms-2">
                                Delete
                            </button>
                            {/* new checkbox which is checked*/}
                            {/* if todo.done is true*/}
                            {/* if user changes checkbox, we'll pass the*/}
                            {/* todo to reducer function to update todo's*/}
                            {/* state*/}
                            <input type="checkbox"
                                   checked={todo.done}
                                   onChange={() =>
                                    toggleTodoDone(todo)}
                                   className="me-2"/>
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;