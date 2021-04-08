import React, { useContext } from "react";
import "./style.scss";
import onlineIcon from "../../../../../../assets/icons/onlineIcon.png";
import closeIcon from "../../../../../../assets/icons/closeIcon.png";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Context } from "../../../../../../context";
import { NavLink } from "react-router-dom";
import { CHAT_PATH } from "../../../../../../App";

const Room = ({ roomName }) => {
  const location = useLocation();
  const { room } = queryString.parse(location.search);
  const { deleteRoom, userName } = useContext(Context);

  const isRoomActive = roomName === room;

  const onDeleteRoom = () => {
    deleteRoom(roomName);
  };

  return (
    <div className="chat__rooms rooms">
      <NavLink
        to={`${CHAT_PATH}?name=${userName}&room=${roomName}`}
        className="room__link"
      >
        <div className="rooms__info">
          {isRoomActive ? (
            <img className="rooms__onlineIcon" src={onlineIcon} alt="online" />
          ) : null}

          <h3>{roomName}</h3>
        </div>
      </NavLink>
      <img
        src={closeIcon}
        className="rooms__exit"
        alt="offline"
        onClick={onDeleteRoom}
      />
    </div>
  );
};

export default Room;
