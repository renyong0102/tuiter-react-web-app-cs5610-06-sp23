// 2.5 Breaking out Hello World into a separate component
import {Link} from "react-router-dom";
import Nav from "../../nav";

function HelloWorld() {
    return(
        <div>
            {/*2.8 Navigating with links in SPAs*/}
            {/*give nav link for each page,so we can see nav all the time*/}
            <Nav/>
            <h1>Hello World!</h1>
        </div>
    );
};
export default HelloWorld;
