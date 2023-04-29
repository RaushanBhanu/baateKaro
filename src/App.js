import SearchBox from "./components/SearchBox";
import UserBox from "./components/UserBox";
import "./styles/App.css";
import "./styles/common.css";
import "./styles/input.css";

function App() {
  return (
    <div className="App">
      <UserBox />
      <SearchBox/>
    </div>
  );
}

export default App;
