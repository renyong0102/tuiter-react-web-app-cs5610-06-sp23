import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
// 2.7 Implementing navigation in Single Page Applications
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      // return statement is returning an HTML tag, not an HTML string.
      // because React.js uses a library called JSX or JavaScript XML
      // use className instead of class
      <BrowserRouter>
          <div className="container">
              <Routes>
                  {/*path -> URL bb                                                       */}
                  {/*<Route path="/labs"*/}
                  {/*       element={<Labs/>}/>*/}
                  {/*2.7 Implementing navigation in Single Page Applications*/}
                  {/*the default page is Labs, ex: the end of URL-hello will nav to hello page*/}
                  <Route index element={<Labs/>}/>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
