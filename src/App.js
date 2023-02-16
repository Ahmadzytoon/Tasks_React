import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Login from './comp/Login'
import Signup from "./comp/regester";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./comp/Header";
import Home from "./comp/User";
import CreateUser from "./comp/CreateUser";
import EditUser from "./comp/EditUser";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidbar from "./comp/Sidbar";


function App() {
  console.log("app.js");
  return (
    
<div>
      <Router>
  <Header/>
  {/* <Sidbar/> */}
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={ <Login/> } />
          <Route path="/Signup" element={ <Signup/> } />
          <Route path="/user/create" element={ <CreateUser/> } />
          <Route path="/user/:id/edit" element={ <EditUser/> } />
        </Routes>
      </Router>
</div>
  );
}

export default App;
