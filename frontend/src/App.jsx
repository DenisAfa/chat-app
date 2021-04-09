import React from "react";
import { Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";

const AUTH_PATH = "/";
export const CHAT_PATH = "/chat";
const APP_TITLE = "Chat App";

const App = () => {
  return (
    <main className="main-wrapper">
      <h1 className="main__title">{APP_TITLE}</h1>
      <Route path={AUTH_PATH} exact render={() => <Auth />} />
      <Route path={CHAT_PATH} render={() => <Chat />} />
    </main>
  );
};

export default App;
