import React, { useContext } from "react";
import "./style.scss";
import { Context } from "../../../../context";

const Message = ({ message: { user, text } }) => {
  const { userName } = useContext(Context);
  let isSentByCurrentUser = false;
  const trimmedName = userName.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message__wrapper">
      <div className="text">
        <p className="message__text">{text}</p>
      </div>
      <p className=" message__box message__box_my">{trimmedName}</p>
    </div>
  ) : (
    <div className="message__wrapper">
      <p className="message__box message__box_other">{user}</p>
      <div className="message__text">
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
