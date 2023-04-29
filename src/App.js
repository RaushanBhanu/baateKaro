import LoginPage from "./screens/LoginPage";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
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
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
