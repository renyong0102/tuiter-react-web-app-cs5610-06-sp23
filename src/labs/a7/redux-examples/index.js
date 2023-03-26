// 2.3 Create a Redux Examples component
import React from "react";
// import Provider which will deliver the data
import {Provider} from "react-redux";

// import the component that consumes the data
import HelloReduxExampleComponent from "./hello-redux-example-component";
import Todos from "./todos-component";

import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer"
// import createStore to store data from reducers
// import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
// create data storage
// const store = createStore(hello);
const store = configureStore({
    reducer:{hello, todos}
});

const ReduxExamples = () => {
    return(
        // Provider->delivers data
        // import Provider which will deliver the data
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;