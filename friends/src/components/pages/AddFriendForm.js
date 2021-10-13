import React, { useState} from 'react';
import { useHistory } from 'react-router';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValues = {
  name: '',
  age: '',
  email: '',
};

export default function AddFriendForm() {

 const { push } = useHistory()

  const[formValues, setFormvalues] = useState(initialValues)

  const handleChanges = (e) => {
    setFormvalues({ ...formValues, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", formValues)
      .then((res) => {
        push("/friends");
        
      })
      .catch((err) => console.log({ err }));

  }

  return (
    <div>
      <h3 className='marketing'>Add New Friend</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChanges}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          value={formValues.age}
          onChange={handleChanges}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChanges}
        />

        <button>Add Friend</button>
      
      </form>
    </div>
    
  )
}


