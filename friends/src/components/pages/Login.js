import React, { useState } from 'react'
import '../../App.css';
import axios from 'axios';
import { useHistory } from 'react-router';

const initialValues = { username: '', password: ''};

export default function Login() {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialValues);

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:5000/api/login", formValues)
        .then((res) => {
          //set res.data.payload(token) to localStorage
          // route user to /friends
         
          window.localStorage.setItem("token", res.data.payload);
          push("/friends");


        })
        .catch((err) => console.log(err.message));

  }



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input 
        id="username" 
        name="username"
        value={formValues.username} 
        onChange={handleChanges}
      />
      <label htmlFor="password">Password</label>
      <input 
        id="password" 
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleChanges}
      />

      <button>Submit</button>
      
    </form>
  )
}