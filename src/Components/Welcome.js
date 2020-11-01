import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  
    return (
        <div className='contain'>
        <div className='header'>
            <h1>Welcome to Trivia!</h1>
            <Link className='link' to='/quest'><button className='butn'>Start</button></Link>
        </div>
        </div>
    )

}

export default Welcome;