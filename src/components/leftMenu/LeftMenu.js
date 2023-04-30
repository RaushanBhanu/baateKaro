import LeftMenuItemsList from "./LeftMenuItemsList";
import { RiMessage3Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { useEffect, useState } from "react";
import LogoutBtn from "./LogoutBtn";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getAuth, signOut } from "firebase/auth";
import { removeCookies } from "../../cookies";
import Avatar from 'react-avatar';
import { firebaseApp } from "../../firebase";
import { useNavigate } from "react-router-dom";

const LeftMenu = ({
  username = "Username",
  email = "username@gmail.com",
  img = "",
  isMobile
}) => {
  // LOGOUT
  const auth = getAuth(firebaseApp);
  const navigation = useNavigate()
  const [loading, setLoading] = useState(null);
  const logoutFirebase = async () => {
    setLoading(true);
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation("/")
        // DELETE CHAT DATA
        removeCookies("user");
        // DELTEE USER COOKIES
        alert("logged out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        alert("logged out failed");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Messages");
  const userImgSize = open ? 60 : 40;
  const mainWidth = open ? 210 : 80;
  const onClick = (active) => {
    console.log(active);
    setActive(active);
  };
  const menuItems = [
    {
      name: "Messages",
      icon: (isActive) => (
        <RiMessage3Fill
          color={isActive ? "var(--primary)" : "white"}
          size={24}
        />
      ),
      onClick: onClick,
    },
    {
      name: "Notifications",
      icon: (isActive) => (
        <IoMdNotifications
          color={isActive ? "var(--primary)" : "white"}
          size={24}
        />
      ),
      onClick: onClick,
    },
  ];
  useEffect(()=>{
    setOpen(!isMobile)
  },[isMobile])
  return (
    <>
      <div
        className={`${"fccsb"} p20`}
        style={{
          width: mainWidth,
          backgroundColor: "#1C1E1F",
          height: "100vh",
        }}
      >
        <div>
          <div id="logo" className="mb40">
            {open ? "Baate Karo" : "BK"}
          </div>
          {/* MENU ITEMS */}
          <LeftMenuItemsList open={open} items={menuItems} active={active} />
        </div>
        <div
          style={{
            marginBottom: 60,
            width: "100%",
          }}
        >
          {/* USER DETAILS */}
          <div>
            {/* IMG */}
            <Avatar 
            // src={"https://lh3.googleusercontent.com/drive-viewer/AFGJ81q-zmJ-x8QWxzPx4NTFi5EAeUDUvE5PG3GC8pGmyz6Izl89x7iiMqDD8fD9jpa-gmeFCIgsJkhT9K0P7T_pyF7BVWsA0Q=s2560"} 
            name={username} round={"10px"} size={userImgSize}  />
            {/* USERNAME */}
            {/* EMAIL */}
            {open && (
              <>
                <div className="medi16 mt10">{username}</div>
                <div className="medi13 lightText mt5">{email}</div>
              </>
            )}
          </div>
        </div>
        {/* bottom box */}
        <div
          className="w100"
          style={{ width: mainWidth, bottom: 0, position: "absolute" }}
        >
          <div className="darkLine mt20" style={{ width: mainWidth }} />
          <div className={`${open ? "frcsb" : "fcc"} w100`}>
            {/* LOGOUT BUTTON */}
            {open && (
              <div style={{ marginLeft: 30 }}>
                <LogoutBtn onClick={logoutFirebase} disabled={loading} />
              </div>
            )}
            {/* CLOSE BTN */}
            <button
              style={{
                borderLeft: open ? "1px solid var(--dark)" : "unset",
                height: 50,
                width: 50,
                alignSelf: "center",
              }}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? (
                <FiChevronLeft size={20} />
              ) : (
                <FiChevronRight size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
