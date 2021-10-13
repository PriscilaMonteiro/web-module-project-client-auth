import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Buttonout() {
  return (
    <Link to='logout'>
      <button className='btn'>Logout</button>
    </Link>
  );
}