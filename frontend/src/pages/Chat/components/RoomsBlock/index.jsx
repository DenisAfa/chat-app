import React, { useContext } from "react";
import "./style.scss";
import { Context } from "../../../../context";
import RoomCreator from "./components/RoomCreator";
import Room from "./components/Room";
import { NavLink } from "react-router-dom";
import { CHAT_PATH } from "../../../../App";

const RoomsBlock = () => {
  const { rooms } = useContext(Context);

  const roomElement = Array.from(rooms).map((room, ind) => (
    <Room roomName={room} key={ind} />
  ));
  {
  }

  return (
    <div className="rooms__wrapper">
      <h3 className="rooms__title">My rooms</h3>
      {roomElement}
      <RoomCreator />
    </div>
  );
};

export default RoomsBlock;
