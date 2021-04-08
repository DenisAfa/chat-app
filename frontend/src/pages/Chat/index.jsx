import React, { useEffect, useContext } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./style.scss";
import { useLocation } from "react-router";
import RoomsBlock from "./components/RoomsBlock";
import InputMessage from "./components/InputMessage";
import MessagesField from "./components/MessagesField";
import { Context } from "../../context";
import UsersBlock from "./components/UsersBlock";

const ENDPOINT = "localhost:5000";
// const ENDPOINT = "https://react-chat-test-app.herokuapp.com/";

let socket;

const Chat = () => {
  const {
    changeUserName,
    changeRoomName,
    changeMessage,
    message,
    changeMessagesList,
    changeUsersList,
    addRoom,
    userName,
    roomName,
    rooms,
    users,
  } = useContext(Context);

  const location = useLocation();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, { transports: ["websocket"] });

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        console.log(error);
      }
    });

    if (roomName !== room) {
      socket.emit("leaveRoom", { userName, roomName });
    }
    console.log(users);
    changeUserName(name);
    changeRoomName(room);
    addRoom(room);
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      changeMessagesList(message);
    });

    socket.on("roomData", ({ users }) => {
      console.log(users);
      changeUsersList(users);
    });
  }, [location.search]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => changeMessage(""));
    }
  };

  return (
    <section className="chat">
      <RoomsBlock />
      <div className="chat__field field">
        <MessagesField />
        <InputMessage sendMessage={sendMessage} />
      </div>
      <UsersBlock />
    </section>
  );
};

export default Chat;
