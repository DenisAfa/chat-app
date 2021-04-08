import React, { useContext, useMemo } from "react";
import "./style.scss";
import { Context } from "../../../../context";

const Message = ({ message: { user, text, currentRoom } }) => {
  const { userName, roomName } = useContext(Context);

  const dateSendMessage = useMemo(() => {
    const date = new Date().toLocaleTimeString().slice(0, -3);
    return date;
  }, [text]);

  const trimmedName = userName.trim().toLowerCase();
  const trimmedRoom = roomName.trim().toLowerCase();
  const messageUser = user.trim().toLowerCase();
  const messageRoom = currentRoom.trim().toLowerCase();

  const isSentByCurrentUser = trimmedName === messageUser;
  const isCurrentRoom = trimmedRoom === messageRoom;

  return isCurrentRoom ? (
    isSentByCurrentUser ? (
      <div className="message__wrapper">
        <div className="text">
          <p className="message__text">{text}</p>
        </div>
        <div className="message__box-wrapper">
          <p className=" message__box message__box_my">{trimmedName}</p>
          <span className="message__time">{dateSendMessage}</span>
        </div>
      </div>
    ) : (
      <div className="message__wrapper">
        <div className="message__box-wrapper">
          <p className="message__box message__box_other">{user}</p>
          <span className="message__time">{dateSendMessage}</span>
        </div>
        <div className="message__text">
          <p className="text">{text}</p>
        </div>
      </div>
    )
  ) : null;
};

export default Message;
