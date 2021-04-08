import React, { useContext } from "react";
import "./style.scss";
import { Context } from "../../../../context";
import Room from "./components/Room";

const RoomsBlock = () => {
  const { rooms, userName } = useContext(Context);

  const roomElement = Array.from(rooms).map((room, ind) => (
    <Room roomName={room} key={ind} />
  ));

  return (
    <div className="rooms__wrapper">
      <h3 className="rooms__title">My rooms</h3>
      {roomElement}
    </div>
  );
};

export default RoomsBlock;
