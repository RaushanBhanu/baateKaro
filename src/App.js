import Dashboard from "./screens/Dashboard";
import LoginPage from "./screens/LoginPage";
import "./styles/App.css";
import "./styles/common.css";
import "./styles/input.css";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useCookies } from "react-cookie";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import { firebaseApp } from "./firebase";

function App() {
  const auth = getAuth(firebaseApp);
  const [uid, setUid] = useState("");
  const [cookies, setCookies, removeCookies] = useCookies();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setUid(user.uid);
        setCookies(
          "user",
          JSON.stringify({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
          })
        );
      } else {
        removeCookies("user");
        setUid("");
      }
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
