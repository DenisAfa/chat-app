import React, { useContext, useRef } from "react";
import "./style.scss";
import { Context } from "../../../../../../context";
import { NavLink } from "react-router-dom";
import { CHAT_PATH } from "../../../../../../App";

const RoomCreator = () => {
  const { addRoom, userName } = useContext(Context);
  const roomName = useRef(null);
  const newRoom = roomName.current?.value;

  const onCreateNewRoom = (e) => {
    if (newRoom !== "") {
      addRoom(newRoom);
    }
    e.preventDefault();
    roomName.current.value = "";
  };

  return (
    <form action="" className="field__form rooms__form">
      <input
        type="text"
        placeholder="Room name"
        className="rooms__input"
        ref={roomName}
      />
      <NavLink to={`${CHAT_PATH}?name=${userName}&room=${newRoom}`}>
        <button
          className="auth__button rooms__button"
          onClick={onCreateNewRoom}
        >
          Create
        </button>
      </NavLink>
    </form>
  );
};

export default RoomCreator;
