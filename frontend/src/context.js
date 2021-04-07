import React, { useReducer } from "react";

export const Context = React.createContext();

const CHANGE_USER_NAME = "CHANGE-USER-NAME";
const CHANGE_ROOM_NAME = "CHANGE-ROOM-NAME";
const CHANGE_AUTH_STATUS = "CHANGE-AUTH-STATUS";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const CHANGE_MESSAGES_LIST = "CHANGE-MESSAGES-LIST";
const CHANGE_USERS_LIST = "CHANGE-USERS-LIST";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_USER_NAME:
      return { ...state, userName: action.newUserName };
    case CHANGE_ROOM_NAME: {
      return { ...state, roomName: action.newRoomName };
    }
    case CHANGE_AUTH_STATUS: {
      return { ...state, hasUserAuth: action.newAuthStatus };
    }
    case CHANGE_MESSAGE: {
      return { ...state, message: action.newMessage };
    }
    case CHANGE_MESSAGES_LIST: {
      const copyMessages = state.messages.slice();
      copyMessages.push(action.newMessage);
      return {
        ...state,
        messages: copyMessages,
      };
    }
    case CHANGE_USERS_LIST: {
      return {
        ...state,
        users: action.newUsersList,
      };
    }
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    userName: "",
    roomName: "",
    message: "",
    messages: [],
    users: [],
    hasUserAuth: false,
  });

  const changeUserName = (newUserName) =>
    dispatch({ type: CHANGE_USER_NAME, newUserName });
  const changeRoomName = (newRoomName) =>
    dispatch({ type: CHANGE_ROOM_NAME, newRoomName });
  const changeAuthStatus = (newAuthStatus) =>
    dispatch({ type: CHANGE_AUTH_STATUS, newAuthStatus });
  const changeMessage = (newMessage) =>
    dispatch({ type: CHANGE_MESSAGE, newMessage });
  const changeMessagesList = (newMessage) => {
    dispatch({ type: CHANGE_MESSAGES_LIST, newMessage });
  };
  const changeUsersList = (newUsersList) => {
    dispatch({ type: CHANGE_USERS_LIST, newUsersList });
  };

  return (
    <Context.Provider
      value={{
        userName: state.userName,
        roomName: state.roomName,
        hasUserAuth: state.hasUserAuth,
        message: state.message,
        messages: state.messages,
        users: state.users,
        changeUserName,
        changeRoomName,
        changeAuthStatus,
        changeMessage,
        changeMessagesList,
        changeUsersList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
