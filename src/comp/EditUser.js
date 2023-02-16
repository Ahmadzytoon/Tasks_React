import React from "react";
import {useState,useEffect} from "react"
import axios from "axios";
import {useNavigate, useParams}from "react-router-dom";

function EditUser () {

  const {id} = useParams()
  const navigate=useNavigate()
  const[inputs,setInputs]=useState([]);
  

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost:80/api_react/user/${id}`).then(function(response) {
      console.log(response.data[0]);
      setInputs(response.data[0]);
    });
  }


  const handleChange =(event)=>{
    const name =event.target.name;
    const value =event.target.value;
    setInputs(values=>({...values,[name]:value}));
  }
  
    const handleSubmit=(event)=>{
  event.preventDefault();
  
  axios.put(`http://localhost:80/api_react/user/${id}/edit`,inputs).then(function(response){
  console.log(response.data);
  navigate("/");
  
  });
}
  return (
    <>
        
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <table >
          <tbody>
            <tr>
              <th>
                <label htmlFor=""> Name:</label>
              </th>
              <td>
                <input type="text" name="name" value={inputs.name} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
              <label htmlFor=""> Email:</label>              
                </th>
              <td>
              <input type="text" name="email" value={inputs.email}  onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th>
              <label htmlFor=""> Mobile:</label>
              </th>
              <td>
              <input type="text" name="mobile" value={inputs.mobile}  onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
              <label htmlFor=""> password:</label>
              </th>
              <td>
              <input type="text" name="password" value={inputs.password}  onChange={handleChange} />
              </td>
            </tr>
            <tr>
            
              <td>
              <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>

      </form>
    </div>
  </>
  );
}


export default EditUser
