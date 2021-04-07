import React, { useContext } from "react";
import "./style.scss";

import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message";
import { Context } from "../../../../context";

const MessagesField = () => {
  const { messages } = useContext(Context);

  return (
    <ScrollToBottom className="field__messages">
      {messages.map((message, ind) => (
        <div key={ind} className="field__message message">
          <Message message={message} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default MessagesField;
