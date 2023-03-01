// 2.3 Implementing the Labs component
import Assignment6 from "./a6";
import Nav from "../nav";

function Labs() {
    // in react, there is no `` needed in return, instead return()
    return(
        <div>
            {/*import the function Assignment6 from folder a6*/}
            <Nav/>
            <Assignment6/>
        </div>
    );
}
export default Labs;
