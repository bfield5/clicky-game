import React, { Component } from "react";
import FriendCard from "../FriendCard";
import Wrapper from "../Wrapper";
import friends from "../../data";


class Game extends React.Component {
  state = {
    friends: friends,
    score: 0,
    topScore: 0
  }

// function gets called when the page loads
componentDidMount() {
  // reorders the friends array on state changes
  this.setState({ friends: this.shuffleDeck(this.state.friends) });
}

 // shuffle the imported friends array in random order
 shuffleDeck = friends => {
  let newFriends = friends.sort(function(a, b){return 0.5 - Math.random()});
  return newFriends;
};

// resets all the clicked properties to false
resetDeck = friends => {
  const resetFriends = friends.map(item => ({ ...item, clicked: false }));
  // console.log(friends);
  // console.log(resetFriends);
  return this.shuffleDeck(resetFriends);
};

// checks to see if score is higher than the topscore then updates the state with the update array
correctGuess = newFriends => {
  let newScore = this.state.score;
  newScore++
  let newTopScore = Math.max(newScore, this.state.topScore);

  this.setState({
      friends: this.shuffleDeck(newFriends),
      score: newScore,
      topScore: newTopScore,
      
  })
}

// restarts the game with fresh data
wrongGuess = newFriends => {
  this.setState({
    friends: this.resetDeck(newFriends),
      score: 0
  })
}

// when a card is clicked, check if it has been clicked before,
// then update that cards clicked property
gameCardClick = id => {
  let guessedCorrectly = false;
  // newFriends will be the friends array with updated clicked properties
  const newFriends= this.state.friends.map(item => {
    if (item.id === id) {
      if (!item.clicked) {
        item.clicked = true;
        guessedCorrectly = true;
      }
    }
    return item;     
  });
  // if guessedCorrectly = true, run the correctGuess function,
  // else run the wrongGuess function
  guessedCorrectly ? this.correctGuess(newFriends) : this.wrongGuess(newFriends);
};


  
  render() {
    return (
      <div>
          <Wrapper>
            <h1></h1>
            {this.state.friends.map(item => 
              <FriendCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              clicked={item.clicked}
              handleClick={this.gameCardClick}
            />
              )}
            
          </Wrapper>
        </div>
      );
    }
    
    
}




export default Game;
