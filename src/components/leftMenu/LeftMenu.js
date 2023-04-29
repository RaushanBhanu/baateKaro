import LeftMenuItemsList from "./LeftMenuItemsList";
import { RiMessage3Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import LogoutBtn from "./LogoutBtn";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LeftMenu = ({
  username = "Username",
  email = "username@gmail.com",
  img = "",
}) => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("Messages");
  const userImgSize = open?60:40
  const mainWidth = open?210:80
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
          }}
        >
          {/* USER DETAILS */}
          <div>
            {/* IMG */}
            <img
              src={img}
              alt="profilePic"
              height={userImgSize}
              width={userImgSize}
              className="br10"
            />
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
          <div className={`${open?"frcsb":"fcc"} w100`}>
            {/* LOGOUT BUTTON */}
            {open&&<div style={{ marginLeft: 30 }}>
              <LogoutBtn />
            </div>}
            {/* CLOSE BTN */}
            <button
              style={{
                borderLeft: open?"1px solid var(--dark)":"unset",
                height: 50,
                width: 50,
                alignSelf:"center"
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
