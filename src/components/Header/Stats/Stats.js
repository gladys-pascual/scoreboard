import React from "react";
import "./Stats.scss";

const Stats = ({ players }) => {
  const totalPlayers = players.length;
  const totalPoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);
  return (
    <div className="stats">
      <p>Total Players: {totalPlayers}</p>
      <p>Total Points: {totalPoints}</p>
    </div>
  );
};

export default Stats;
