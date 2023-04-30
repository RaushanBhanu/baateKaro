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
  const [loading, setloading] = useState(true);
  const auth = getAuth(firebaseApp);
  const [uid, setUid] = useState("");
  const [cookies, setCookies, removeCookies] = useCookies();
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user?.uid) {
          console.log("user", user);
          setUid(user.uid);
          setCookies(
            "user",
            JSON.stringify({
              uid: user.uid,
              name: user.displayName,
              email: user.email,
              img: user.photoURL,
            })
          );
        } else {
          removeCookies("user");
          setUid("");
        }
        setloading(false);
      },
      (err) => {
        setloading(false);
        console.log(err, "in onAuthStateChanged");
      },
      () => {
        setloading(false);
      }
    );
  }, [auth]);
  if (loading) {
    return <>Loading</>;
  }
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
