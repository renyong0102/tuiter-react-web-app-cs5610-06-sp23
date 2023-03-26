// 2.3 Implementing the Labs component
import Nav from "../nav";
import Assignment6 from "./a6";
import Assignment7 from "./a7";
import {Routes, Route} from "react-router-dom";

function Labs() {
    // in react, there is no `` needed in return, instead return()
    return(
        <div>
            {/*import the function Assignment6 from folder a6*/}
            <Nav/>
            <Routes>
                {/*index -> default*/}
                <Route index element={<Assignment6/>}/>
                {/*path -> /a7*/}
                <Route path="a7" element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}
export default Labs;
