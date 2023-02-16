import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost:80/api_react/user/").then(function(response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

   const deleteUser = (id) => {
    axios.delete(`http://localhost:80/api_react/user/${id}/delete`).then(function(response){
      console.log(response.data);
      getUsers();
  })}

  return (
    <>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: "400px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Heading</h1>
              <h4 className="mb-3">Subheading</h4>
              <MDBBtn tag="a" outline size="lg">
                Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h1>List User</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index)=>

            <tr key={index}>
              <td>{user.id}</td>
            
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <Link to={`user/${user.id}/edit`}>edit</Link>
                <button onClick={()=>deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
        )}
    
        </tbody>
      </table>
    </>
  ); 
}

export default User;
