import React, { useContext } from "react";
import { CHAT_PATH } from "../../../../App";
import { NavLink } from "react-router-dom";
import { Context } from "../../../../context";

const RoomBlock = () => {
  const { userName, roomName, changeRoomName, addRoom } = useContext(Context);
  const roomBlockGreeting = "Enter room name";

  const onChangeRoom = (e) => {
    const roomName = e.target.value;
    changeRoomName(roomName);
  };

  const onAddRoom = () => {
    addRoom(roomName);
  };

  return (
    <>
      <h3 className="auth__welcome">{roomBlockGreeting}</h3>
      <input
        placeholder="Room"
        className="auth__input"
        type="text"
        onChange={onChangeRoom}
      />
      <NavLink to={`${CHAT_PATH}?name=${userName}&room=${roomName}`}>
        <button className="auth__button" onClick={onAddRoom}>
          Sign In
        </button>
      </NavLink>
    </>
  );
};

export default RoomBlock;
