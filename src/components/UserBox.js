import { toCapitalise } from "../common/CommonFunctions";
const UserBox = ({
  name = "username",
  status = "texting...",
  time = "10h",
  style = {},
  activeUser = "",
  setActiveUser = () => {},
}) => {
  const active = activeUser === name;
  return (
    <>
      <button
        className={`frc ${active ? "normalBg" : ""} br10`}
        style={{
          height: 76,
          padding: "10px 8px",
          maxWidth: 363,
          boxSizing: "border-box",
          ...style,
        }}
        onClick={() => {
          setActiveUser(name);
        }}
      >
        {/* PROFILE ICON */}
        <div className="">
          <img className="br10" height={60} width={60} alt="userProfile" />
        </div>
        <div className="ml20 fcfs" style={{}}>
          {/* USERNAME */}
          <div className="medi14 mb5">{toCapitalise(name)}</div>
          {/* STATUS */}
          <div className="regu13 paraColor">
            {status}
            {`  •  `}
            {time}
          </div>
        </div>
      </button>
    </>
  );
};

export default UserBox;
