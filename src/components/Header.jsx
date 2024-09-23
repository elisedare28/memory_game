import React from 'react';

const Header = ({score, highscore}) => {
  
    return (
        <div>
            <h1>Do not select the same card twice!</h1>
            <h3>Score: {score}</h3>
            <h3>High Score: {highscore}</h3>
        </div>
    );
}


export default Header;