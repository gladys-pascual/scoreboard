import React from "react";
import "./NoPlayer.scss";

const NoPlayer = () => {
  return (
    <>
      <h1 className="no-player">Noone is playing yet.</h1>
      <h1 className="no-player">
        Add the first player{" "}
        <span role="img" aria-label="fencing">
          🤺
        </span>
      </h1>
    </>
  );
};

export default NoPlayer;
