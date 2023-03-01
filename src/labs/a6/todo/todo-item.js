// 2.13 Implementing ToDo List using React
const TodoItem = (
    {
        // todo is variable
        // inital val
        todo = {
            done: true,
            title: 'Buy milk',
            status: 'COMPLETED'
        }
    }) => {
    return (
        <li>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>

    );
}
export default TodoItem;

// const TodoItem = (todo) => {
//     // json object?
//     // const todo = {
//     //     done: true,
//     //     title: 'Buy milk',
//     //     status: 'COMPLETED'
//     // };
//     todo={};
//     return (
//         <div>
//             <h2>To DO List</h2>
//             <li>
//                 <input type="checkbox"
//                        defaultChecked={todo.done}/>
//                 {todo.title}
//                 ({todo.status})
//             </li>
//         </div>
//     );
// };
// export default TodoItem;
