import LoginPage from "./screens/LoginPage";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/common.css";
import "./styles/input.css";
import Dashboard from "./screens/Dashboard";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useCookies } from "react-cookie";

function App() {
  const auth = getAuth();
  const [uid, setUid] = useState("");
  const [cookies, setCookies] = useCookies();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUid(user.uid);
      setCookies(
        "user",
        JSON.stringify({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        })
      );
    });
  }, [auth]);
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
