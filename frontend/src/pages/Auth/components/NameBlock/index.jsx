import React, { useContext } from "react";
import { Context } from "../../../../context";
import "./style.scss";

const NameBlock = () => {
  const { userName, changeUserName, changeAuthStatus } = useContext(Context);
  const greeting = "Hello, please enter your name";

  const onChangeName = (e) => {
    const userName = e.target.value;
    changeUserName(userName);
  };

  const onAuthChat = (e) => {
    if (userName) {
      changeAuthStatus(true);
      e.preventDefault();
    }
  };

  return (
    <>
      <h3 className="auth__welcome">{greeting}</h3>
      <input
        placeholder="Name"
        className="auth__input"
        type="text"
        onChange={onChangeName}
      />
      <button onClick={onAuthChat} className="auth__button">
        Next
      </button>
    </>
  );
};

export default NameBlock;
