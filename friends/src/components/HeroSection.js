import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='container'>
      <div className='hero-container'>
        
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
           Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;