import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import AddPlayerForm from "./components/AddPlayerForm/AddPlayerForm";
import NoPlayer from "./components/NoPlayer/NoPlayer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  prevPlayerId = 0;

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: (this.prevPlayerId += 1),
        },
      ],
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      return {
        score: (prevState.players[index].score = Math.max(
          prevState.players[index].score + delta,
          0
        )),
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map((player) => player.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />
        {this.state.players.length > 0 ? (
          this.state.players.map((player, index) => (
            <Player
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              removePlayer={this.handleRemovePlayer}
              scoreChange={this.handleScoreChange}
              isHighScore={highScore === player.score}
            />
          ))
        ) : (
          <NoPlayer />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
