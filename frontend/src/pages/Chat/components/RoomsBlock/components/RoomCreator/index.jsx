import React, { useContext, useRef } from "react";
import "./style.scss";
import { Context } from "../../../../../../context";
import { Link, NavLink } from "react-router-dom";
import { CHAT_PATH } from "../../../../../../App";

const RoomCreator = () => {
  const { addRoom, userName, roomName, changeRoomName } = useContext(Context);
  const currentRoomName = useRef("");

  const onChangeRoomName = (e) => {
    const newRoomName = e.target.value;
    changeRoomName(newRoomName);
  };

  const onCreateNewRoom = (e) => {
    if (roomName !== "") {
      addRoom(roomName);
    }
    currentRoomName.current.value = "";
  };

  return (
    <div className="field__form rooms__form">
      <input
        type="text"
        placeholder="Room name"
        className="rooms__input"
        ref={currentRoomName}
        onChange={onChangeRoomName}
      />

      <Link
        to={`${CHAT_PATH}?name=${userName}&room=${roomName}`}
        onClick={onCreateNewRoom}
        className="auth__button rooms__button"
      >
        Create
      </Link>
    </div>
  );
};

export default RoomCreator;
