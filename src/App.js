import { useState } from "react";
import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";

import SidebarLeft from "./Components/SidebarLeft/SidebarLeft";
import SidebarRight from "./Components/SidebarRight/SidebarRight";
import Login from "./Components/Login/Login";
import { useStateValue } from "./ContextData/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <Header user={user} />
          <div className="app__body">
            <SidebarLeft user={user} />
            <Feed />
            <SidebarRight />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
