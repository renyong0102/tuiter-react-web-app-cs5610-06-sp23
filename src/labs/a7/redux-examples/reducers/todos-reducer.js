import {createSlice} from "@reduxjs/toolkit";
// Redux allows maintaining the state of an application
// CRUD: create data, read data, update date, and delete data
// initialTodos is an object
const initialTodos = [
    // initial sets of the simple todos objects in a constant array
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todosSlice = createSlice({
    name: 'todos',
    initialState:initialTodos,
    // define reducer functions as a map
    // reducer functions receive current state
    // mutate current state into new state, e.g.,
    // pushing new object. _id set to current date
    // do set to "do" object sent through action obj
    // commonly referred to as the "payload"
    // we implement an event called addTodo, and then we need useDispatch to hook
    reducers:{
        addTodo(state, action){
            state.push({
                _id:(new Date()).getTime(),
                do: action.payload.do,
                done:false
            });
        },
        // new deleteTodo function extracts
        // index from action's payload and
        // uses it to splice out the todo to
        // be deleted
        deleteTodo(state, action){
            const index = action.payload
            state.splice(index, 1)
        },
        // add a todoDoneToggle reducer function that will find the todo by its ID,
        // and then update its done field
        todoDoneToggle(state, action){
            const todo = state.find((todo)=>
                todo._id === action.payload._id)
            // the reducer function use the find() method to find the todo item with the _id
            // once it find the correct todo item, it toggles its done property by using !
            // if done was true, it become false, otherwise false->true
            todo.done = !todo.done
        }
    }
});
export default todosSlice.reducer
export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions
