import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>All About Friends</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Watch-from-the-beginning marathon'
              label='Nostalgy'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpeg'
              text='Here’s what Friends cast members have done since the show’s finale aired'
              label='Cast'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Friends Reunion'
              label='Nostalgy'
              path='/products'
            />
            <CardItem
              src='images/img-9.jpg'
              text='F.R.I.E.N.D.S Trivia'
              label='Game'
              path='/login'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;