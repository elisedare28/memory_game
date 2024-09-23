import React, {useState, useEffect} from "react";

const Card = ({key, reset, value, endGame, updateScore, shuffle}) => {
    
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
        if(clicked)
            endGame();
        else    
        { 
            updateScore();
            shuffle();   
        } 
        
    };

    useEffect(() => {
        if(reset)
            setClicked(false);
    },[reset]);

    
   return(
    <>
        <button onClick = {() => {
            handleClick();
            shuffle();
        }}><img src = {`https://picsum.photos/id/${value*10}/150`} /></button>
    </>
   )
}

export default Card;