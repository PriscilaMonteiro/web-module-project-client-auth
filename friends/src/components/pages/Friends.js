import React, {useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function Friends(props) {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log({ err }));
  }, [])

  return (
    <>
      <h1 className='friends'>Friends</h1>
      {friends.map((friend) => (
        <p className='friendslist' key={friend.id}>{friend.name}</p>

      ))}
    </>
  );
}
