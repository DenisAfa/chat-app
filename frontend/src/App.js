import React from "react";
import { Route } from "react-router-dom";
import Auth from "./components/Auth";
import Chat from "./components/Chat";

const MAIN_PATH = "/";
const CHAT_PATH = "/chat";

const App = () => {
  return (
    <div>
      <Route path={MAIN_PATH} exact render={() => <Auth />} />
      <Route path={CHAT_PATH} render={() => <Chat />} />
    </div>
  );
};

export default App;
