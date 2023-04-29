import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/BlueButton";
import TextBox from "../components/common/TextBox";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseApp } from "../firebase";

const LoginPage = () => {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUser] = useState("");
  const [toCreateAccount, setToCreateAccount] = useState(false);
  const handleClick = (event) => {
    // toggle shown state
    setToCreateAccount((current) => !current);
  };
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        alert("Logged in successfully 👍!");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        // const errorCode = error.code;
        alert(`Failed to login\n\n${errorMessage}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createFirebaseAccount = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return updateProfile(auth.currentUser, {
          displayName: username,
          //  photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
          .then(() => {
            // Profile updated!
            alert("Account created successfully 👍!");
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error, " in updateProfile");
          }).f;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, " in createFirebaseAccount");
        // ..
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="h-[35rem]" style={{ background: "var(--lblueGrad)" }}>
        <Link to={"/"} className="pt-5 pl-12" id="logo">
          Baate Karo
        </Link>
        <div className="flex justify-center items-center h-[90vh]">
          <div className="text-center">
            <div className="mb-16" id="logo" style={{ fontSize: "70px" }}>
              Baate Karo
            </div>
            {
              <div className="mb-8 text-xl font-bold">
                {toCreateAccount ? "Create Account" : "Login"}
              </div>
            }
            {toCreateAccount && (
              <TextBox
                maxLength={20}
                outerClass={"mb-6"}
                width={"100%"}
                input={username}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                placeholder="UserName"
                inputClass={"pl-4"}
              />
            )}
            <TextBox
              maxLength={50}
              outerClass={"mb-6"}
              width={"100%"}
              input={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              inputClass={"pl-4"}
            />
            <TextBox
              maxLength={16}
              outerClass={"mb-10"}
              input={pass}
              width={"100%"}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Password"
              inputClass={"pl-4"}
              type="password"
            />
            <Button
              disabled={loading}
              text={
                loading
                  ? "Loading"
                  : toCreateAccount
                  ? "Create Account"
                  : "Login"
              }
              onclick={toCreateAccount ? createFirebaseAccount : onLogin}
            />
            <div className="mt-10 text-[13px]">
              <span className="opacity-50 mr-2">Don't have an account?</span>
              <span
                onClick={handleClick}
                className="opacity-100 cursor-pointer"
              >
                Create
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
