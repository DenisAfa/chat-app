import React, { useContext } from "react";
import "./style.scss";
import RoomBlock from "./components/RoomBlock";
import NameBlock from "./components/NameBlock";
import { Context } from "../../context";

const Auth = () => {
  const { hasUserAuth } = useContext(Context);

  return (
    <section className="auth">
      {hasUserAuth ? <RoomBlock /> : <NameBlock />}
    </section>
  );
};

export default Auth;
