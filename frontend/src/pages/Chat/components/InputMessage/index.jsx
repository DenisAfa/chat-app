import React, { useContext } from "react";
import "./style.scss";
import { Context } from "../../../../context";

const InputMessage = ({ sendMessage }) => {
  const { changeMessage, message } = useContext(Context);

  const onChangeMessage = (e) => {
    const textMessage = e.target.value;
    changeMessage(textMessage);
  };

  const onSendMessage = (e) => {
    const key = e.key;
    const ENTER_KEY = "Enter";

    if (!key) {
      sendMessage(e);
    }

    if (key === ENTER_KEY) {
      sendMessage(e);
    }
  };

  return (
    <form action="" className="field__form">
      <input
        type="text"
        placeholder="Type a message..."
        className="auth__input field__input"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onSendMessage}
      />
      <button className="auth__button field__button " onClick={onSendMessage}>
        Send
      </button>
    </form>
  );
};

export default InputMessage;
