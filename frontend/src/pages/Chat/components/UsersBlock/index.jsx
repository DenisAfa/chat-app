import React, { useContext } from "react";
import "./style.scss";
import { Context } from "../../../../context";

const UsersBlock = () => {
  const { roomName, users } = useContext(Context);

  const userElement = Array.from(users).map((user) => {
    if (roomName === user.room) {
      return (
        <div className="users__item" key={user.id}>
          {user.name}
        </div>
      );
    }
  });

  return (
    <div className="users">
      <h3 className="users__title">Users</h3>
      {userElement}
    </div>
  );
};

export default UsersBlock;
