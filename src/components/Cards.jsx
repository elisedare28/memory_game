import React, {useState} from "react";
import Card from './Card';
const Cards = ({endGame, updateScore, reset}) => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [positions, setPositions] = useState(
		cards.map((value, index) => index+1)
	);

    const shuffle = () => {
		const shuffledArray = [...positions]; 

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    setPositions(shuffledArray);

    };  
    
    return(
        <div id = "cardsGrid">
            {positions.map((pos) =>
                <Card 
                    key = {pos}
                    value = {pos}
                    endGame = {endGame}
                    updateScore = {updateScore}
                    reset = {reset}
                    shuffle = {shuffle}
                />
            )}
        </div>
    );
}

export default Cards;
