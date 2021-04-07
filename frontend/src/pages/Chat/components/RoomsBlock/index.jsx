import React, { useContext } from "react";
import "./style.scss";

import onlineIcon from "../../../../assets/icons/onlineIcon.png";
import closeIcon from "../../../../assets/icons/closeIcon.png";
import { Context } from "../../../../context";

const RoomsBlock = () => {
  const { roomName } = useContext(Context);

  return (
    <div className="rooms__wrapper">
      <h3 className="rooms__title">My rooms</h3>
      <div className="chat__rooms rooms">
        <div className="rooms__info">
          <img className="rooms__onlineIcon" src={onlineIcon} alt="online" />
          <h3>{roomName}</h3>
        </div>
        <div className="rooms__exit">
          <a href="/">
            <img src={closeIcon} alt="offline" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomsBlock;
