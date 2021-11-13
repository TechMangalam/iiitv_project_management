// import "./App.css"
import React from 'react';
import {useHistory} from "react-router-dom";
import NavbarCustom from './Components/Navbar/NavbarCustom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Pages';
import Admin from './Components/Pages/Admin';
import Student from './Components/Pages/Student';
import Faculty from './Components/Pages/Faculty';
import SignUp from "./Components/SignUP/SignUp";
import Login from "./Login/Login";


function App() {
    return(
        <BrowserRouter>

            <NavbarCustom />
            <Route path="/SignUp" exact component={SignUp}/>
            <Route path="/Student" exact component={Student}/>

            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Faculty' exact component={Faculty} />
                <Route path='/Admin' exact component={Admin} />
                <Route path='/Login' exact  component={Login} />
            </Switch>
        </BrowserRouter>

    );

}

export default App;
