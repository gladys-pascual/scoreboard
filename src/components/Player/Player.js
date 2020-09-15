import React, { PureComponent } from "react";
import Icon from "./Icon/Icon";
import Counter from "./Counter/Counter";
import "./Player.scss";

class Player extends PureComponent {
  render() {
    const {
      name,
      score,
      id,
      index,
      removePlayer,
      scoreChange,
      isHighScore,
    } = this.props;
    return (
      <section className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            {" "}
            ✖{" "}
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>
        <Counter score={score} index={index} scoreChange={scoreChange} />
      </section>
    );
  }
}

export default Player;
