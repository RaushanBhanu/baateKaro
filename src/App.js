import "./styles/App.css";
import "./styles/common.css";
import "./styles/input.css";

import LeftMenu from "./components/leftMenu/LeftMenu";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import LoginPage from "./screens/LoginPage";
import SearchBox from "./components/SearchBox";
import Video from "./components/videocall/Video";
// import UserBox from "./components/UserBox";
// import UserSelector from "./components/dashboard/UserSelector";

function App() {
  const uid = "";
  if (uid) {
    return <Dashboard />;
  }
  return (
    <div className="App">
      {/* <UserBox /> */}
      {/* <SearchBox /> */}
      {/* <UserSelector /> */}
      {/* <LeftMenu/> */}
      {/* <Home/> */}
      {/* <Dashboard/> */}
      {/* <LoginPage/> */}
      {/* {VideoCall/} */}
    </div>
  );
}

export default App;
