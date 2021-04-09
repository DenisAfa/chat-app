import React, { useContext } from "react";
import "./style.scss";
import Room from "./components/Room";

const RoomsBlock = () => {
  return (
    <div className="rooms__wrapper">
      <h3 className="rooms__title">My rooms</h3>
      <Room />
    </div>
  );
};

export default RoomsBlock;
