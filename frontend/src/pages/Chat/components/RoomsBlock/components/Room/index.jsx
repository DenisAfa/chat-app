import React, { useContext } from "react";
import "./style.scss";
import onlineIcon from "../../../../../../assets/icons/onlineIcon.png";
import closeIcon from "../../../../../../assets/icons/closeIcon.png";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Context } from "../../../../../../context";

const Room = () => {
  const location = useLocation();
  const { room } = queryString.parse(location.search);
  const { deleteRoom, roomName } = useContext(Context);

  const isRoomActive = roomName === room;

  const onDeleteRoom = () => {
    deleteRoom(roomName);
  };

  return (
    <div className="chat__rooms rooms">
      <div className="rooms__info">
        {isRoomActive ? (
          <img className="rooms__onlineIcon" src={onlineIcon} alt="online" />
        ) : null}
        <h3>{roomName}</h3>
      </div>
      <div className="rooms__exit">
        <img src={closeIcon} alt="offline" onClick={onDeleteRoom} />
      </div>
    </div>
  );
};

export default Room;
