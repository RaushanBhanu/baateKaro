import LeftMenu from "./components/leftMenu/LeftMenu";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import LoginPage from "./screens/LoginPage";
// import SearchBox from "./components/SearchBox";
// import UserBox from "./components/UserBox";
// import UserSelector from "./components/dashboard/UserSelector";
import "./styles/App.css";
import "./styles/common.css";
import "./styles/input.css";
import Dashboard from "./screens/Dashboard";

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
      <LoginPage/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
