import LeftMenu from "./components/leftMenu/LeftMenu";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
// import SearchBox from "./components/SearchBox";
// import UserBox from "./components/UserBox";
// import UserSelector from "./components/dashboard/UserSelector";
import "./styles/App.css";
import "./styles/common.css";
import "./styles/input.css";

function App() {
  return (
    <div className="App">
      {/* <UserBox /> */}
      {/* <SearchBox /> */}
      {/* <UserSelector /> */}
      {/* <LeftMenu/> */}
      {/* <Home/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
