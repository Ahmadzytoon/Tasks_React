import React from "react";
import {useState} from "react"
import axios from "axios";
import {useNavigate}from "react-router-dom";

const CreateUser = () => {
  const navigate=useNavigate()
  const[inputs,setInputs]=useState();
  
  const handleChange =(event)=>{
    const name =event.target.name;
    const value =event.target.value;
    setInputs(values=>({...values,[name]:value}));
  }
  
    const handleSubmit=(event)=>{
  event.preventDefault();
  
  axios.post('http://localhost:80/api_react/user/save',inputs).then(function(response){
  console.log(response.data);
  navigate("/");
  
  });
  
  
  console.log(inputs);
  
    }
  
    return (
      <>
        
        <div>
          <h1>Creat User</h1>
          <form onSubmit={handleSubmit}>
            <table cellspacing="pixels">
              <tbody>
                <tr>
                  <th>
                    <label htmlFor=""> Name:</label>
                  </th>
                  <td>
                    <input type="text" name="name" onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <th>
                  <label htmlFor=""> Email:</label>              
                    </th>
                  <td>
                  <input type="text" name="email" onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <th>
                  <label htmlFor=""> Mobile:</label>
                  </th>
                  <td>
                  <input type="text" name="mobile" onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <th>
                  <label htmlFor=""> password:</label>
                  </th>
                  <td>
                  <input type="text" name="password" onChange={handleChange} />
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

export default CreateUser;
