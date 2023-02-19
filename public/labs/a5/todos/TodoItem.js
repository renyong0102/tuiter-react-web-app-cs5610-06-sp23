// Note the TodoItem function takes as a parameter todo which is a string we use to render a line item
const TodoItem = (todo) => {
    return(`
       <li>
<!--       in todos.js, there is other property called boolean: done-->
<!--       and if statement with a checkbox for each <li>-->
          <input type="checkbox"
           ${todo.done ? 'checked' : ''}>
<!--       in todos.js, the objects with title and status-->
           ${todo.title}
           (${todo.status})
       </li>
   `);
}
export default TodoItem;
