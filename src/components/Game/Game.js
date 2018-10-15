import React, { Component } from "react";
import FriendCard from "../FriendCard";
import Wrapper from "../Wrapper";
import Header from "../Header";
import Footer from "../Footer";
import friends from "../../data";


class Game extends Component {
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
  const resetFriends = friends.map(friend => ({ ...friend, clicked: false }));
  // console.log(friends);
  // console.log(resetFriends);
  return this.shuffleDeck(resetFriends);
};

// checks to see if score is higher than the topscore then updates the state with the update array
correctGuess = newFriends => {
  let newScore = this.state.score;
  newScore++
  // fix would be this.state.score
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
  const newFriends= this.state.friends.map(friend => {
    if (friend.id === id) {
      if (!friend.clicked) {
        friend.clicked = true;
        guessedCorrectly = true;
      }
    }
    return friend;     
  });
  // if guessedCorrectly = true, run the correctGuess function,
  // else run the wrongGuess function
  guessedCorrectly ? this.correctGuess(newFriends) : this.wrongGuess(newFriends);
};


  
  render() {
    return (
      <div>
        <Header score={this.state.score} topScore = {this.state.topScore} />
          <Wrapper>
            <h1></h1>
            {this.state.friends.map(friend => 
              <FriendCard
              key={friend.id}
              id={friend.id}
              image={friend.image}
              clicked={friend.clicked}
              handleClick={this.gameCardClick}
            />
              )}
            
          </Wrapper>
          <Footer />
        </div>
      );
    }
    
    
}




export default Game;
