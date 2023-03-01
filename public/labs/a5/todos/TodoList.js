// Create a new file called TodoList.js and import it into full-post.js. Use the TodoList function to render the list of
// todos as shows below

import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
// in TodoList.js, we import two files: TodoItem.js and todos.js
// TodoItem is fcn from TodoItem.js
// todos.js that contains an array of todos
// 3rd
// We use the function map to iterate over the todos array. The map function iterates over the todos array and for each
// element in the array, it invokes the functional parameter. Each element is bound to the todo function parameter, which
// is used to invoke the TodoItem function. The map function collates all the resulting HTML strings from TodoItem into
// an array which we then join them all into a single string.
const TodoList = () => {
    return(`
      <ul>
         ${
        todos.map(todo => {
            return(TodoItem(todo));
        }).join('')
    }
      </ul>
   `);
}
export default TodoList;


// 2nd
// invoking TodoItem several times
// const TodoList = () => {
//     return(`
//        <ul>
// <!--       Use the TodoItem function to render three todo items as shown below-->
//            ${TodoItem('Buy milk')}
//            ${TodoItem('Pickup the kids')}
//            ${TodoItem('Walk the dog')}
//        </ul>
//    `);
// }
// export default TodoList;


// 1st
// const TodoList = () => {
//     return(`
//        <ul>
//            <li>Buy milk</li>
//            <li>Pickup the kids</li>
//            <li>Walk the dog</li>
//        </ul>
//    `);
// }
// export default TodoList;