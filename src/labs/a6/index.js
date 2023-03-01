// 2.4 Breaking out assignments into separate components
import {Link} from "react-router-dom";
import Nav from "../../nav";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment6() {
    return (
        <div>
            {/*2.8 Navigating with links in SPAs*/}
            {/*<Link to="/">Lab</Link> |*/}
            {/*<Link to="/hello">Hello</Link> |*/}
            {/*<Link to="/tuiter">Tuiter</Link>*/}
            <h1>Assignment 6</h1>
            {/*2.10 Working with HTML classes*/}
            <Styles/>
            {/*2.12 Generating conditional output*/}
            <ConditionalOutput/>
            <Classes/>
            <TodoItem/>
            <TodoList/>
        </div>
    );
}
export default Assignment6;
