import {Link} from "react-router-dom";
// 2.9 Implementing a Navigation component
function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/">Assignment6</Link> |
            <Link to="/a7">Assignment7</Link> |
            <Link to="/tuiter/home">Tuiter</Link>
        </div>
    );
}

export default Nav;
