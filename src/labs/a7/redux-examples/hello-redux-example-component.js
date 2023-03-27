import React from "react";
// uses redux's useSelector hook to extract the message from the reducer (react-redux)
import {useSelector} from "react-redux";
import hello from "./reducers/hello";

// create a function called Hello...Component -> by useSelector, retrieve reducer's info
// when component loads, reducers pass the data in function
const HelloReduxExampleComponent = () => {
    // extract 'Hello World' from reducers->hello.js
    const message = useSelector((state) => state.hello.message);
    return(
        <h3>{message}</h3>
    );
};
export default HelloReduxExampleComponent;