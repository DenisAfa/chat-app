import React, { useEffect, useReducer } from "react";

export const Context = React.createContext();

const CHANGE_USER_NAME = "CHANGE-USER-NAME";
const CHANGE_ROOM_NAME = "CHANGE-ROOM-NAME";
const CHANGE_AUTH_STATUS = "CHANGE-AUTH-STATUS";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const CHANGE_MESSAGES_LIST = "CHANGE-MESSAGES-LIST";
const CHANGE_USERS_LIST = "CHANGE-USERS-LIST";
const ADD_ROOM = "ADD-ROOM";
const DELETE_ROOM = "DELETE-ROOM";

const reducer = (state, action) => {
  console.log(state);
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
    case ADD_ROOM: {
      if (state.rooms.includes(action.newRoom)) {
        return state;
      } else {
        const copyRooms = state.rooms.slice();
        copyRooms.push(action.newRoom);
        return {
          ...state,
          rooms: copyRooms,
        };
      }
    }
    case DELETE_ROOM: {
      const roomPosition = state.rooms.indexOf(action.room);
      state.rooms.splice(roomPosition, 1);
      const copyRooms = state.rooms.slice();
      return {
        ...state,
        rooms: copyRooms,
      };
    }
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const initialState = localStorage.getItem("state")
    ? JSON.parse(localStorage.state)
    : {
        userName: "",
        roomName: "",
        message: "",
        messages: [],
        users: [],
        rooms: [],
        hasUserAuth: false,
      };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const changeUserName = (newUserName) =>
    dispatch({ type: CHANGE_USER_NAME, newUserName });
  const changeRoomName = (newRoomName) =>
    dispatch({ type: CHANGE_ROOM_NAME, newRoomName });
  const changeAuthStatus = (newAuthStatus) =>
    dispatch({ type: CHANGE_AUTH_STATUS, newAuthStatus });
  const changeMessage = (newMessage) =>
    dispatch({ type: CHANGE_MESSAGE, newMessage });
  const changeMessagesList = (newMessage) =>
    dispatch({ type: CHANGE_MESSAGES_LIST, newMessage });
  const changeUsersList = (newUsersList) =>
    dispatch({ type: CHANGE_USERS_LIST, newUsersList });
  const addRoom = (newRoom) => dispatch({ type: ADD_ROOM, newRoom });
  const deleteRoom = (room) => dispatch({ type: DELETE_ROOM, room });

  return (
    <Context.Provider
      value={{
        userName: state.userName,
        roomName: state.roomName,
        hasUserAuth: state.hasUserAuth,
        message: state.message,
        messages: state.messages,
        users: state.users,
        rooms: state.rooms,
        changeUserName,
        changeRoomName,
        changeAuthStatus,
        changeMessage,
        changeMessagesList,
        changeUsersList,
        addRoom,
        deleteRoom,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
