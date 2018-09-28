import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      updatePic: "",
      friends: [{ name: 'T$', pictureUrl: 'http://http.cat/404' }]
    }
    this.updateName = this.updateName.bind(this);
    this.updatePic = this.updatePic.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }
  
  updateName(event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }
  
  updatePic(event) {
    this.setState({
      updatePic: event.target.value
    });
  }

  addFriend(event) {
    const newFriend = {name: this.state.name, pictureUrl: this.state.updatePic };
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push(newFriend);
    this.setState({friends: friendsCopy});
    this.clearNames();
  }

  clearNames(even) {
    this.state.name = ({name: this.state.input});
  }
  
  
  // const updateName = event => this.setState({name:event.target.value}); 

  render() {
    const { name, pictureUrl, friends } = this.state;
   console.log(this.state);
    return (
      <div>
        <div>
          Name: <input value = {name} onChange = {event => this.setState({name: event.target.value})} />
          {name}
          </div>
        <div>

        </div>
        <div>
          Picture Url: <input value = {pictureUrl} onChange = {this.updatePic} />
          {pictureUrl}
          </div>
          <button onClick = {this.addFriend}>Add friend</button>
          <div>
            friends: {friends.map(friend => {
              return <div>
                Name: {friend.name}{' '}&nbsp;
                Picture: <img src = {friend.pictureUrl} />
              </div>
            })}
          </div>
      </div>
    );
  }
}

export default App;


