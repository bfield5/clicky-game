import React from "react";
import FriendCard from "../FriendCard";
import Wrapper from "../Wrapper";
import friends from "../../data";


class Game extends React.Component {
  state = {
    friends: friends
  }

  deleteFriend = id => {
    const remainingFriends = this.state.friends.filter(friend => id !== friend.id);
      this.setState({ friends: remainingFriends });
  }


  render() {
    return (
        <Wrapper>
          <h1 className="title">Friends List</h1>
          {this.state.friends.map(friend => 
            <FriendCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            deleteFriend={this.deleteFriend}
          />
            )}
          
        </Wrapper>
      );
    }
    
    
}




export default Game;
