import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import { Context } from "./context";

const AUTH_PATH = "/";
export const CHAT_PATH = "/chat";

const App = () => {
  const { hasUserAuth } = useContext(Context);
  return (
    <main className="main-wrapper">
      <Route path={AUTH_PATH} exact render={() => <Auth />} />
      <Route path={CHAT_PATH} render={() => <Chat />} />
      {/*<Route path={CHAT_PATH} render={() => (hasUserAuth ? <Chat /> : <Auth />)} />*/}
    </main>
  );
};

export default App;
