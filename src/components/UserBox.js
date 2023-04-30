import Avatar from "react-avatar";
const UserBox = ({
  name = "username",
  status,
  time,
  style = {},
  img = "",
  activeUser = "",
  setActiveUser = () => {},
  isMobile,
  user,
}) => {
  const active = activeUser?.name === name;
  return (
    <>
      <button
        className={`frc ${active ? "normalBg" : ""} br10`}
        style={{
          height: 80,
          padding: "10px 8px",
          maxWidth: 363,
          boxSizing: "border-box",
          ...style,
          // width: isMobile ? 80 : undefined,
        }}
        onClick={() => {
          setActiveUser(user);
        }}
      >
        {/* PROFILE ICON */}
        <div className="">
          <Avatar name={name} size="60" round="10px" />
          {/* <img
            src={img}
            className="br10"
            height={60}
            width={60}
            alt="userProfile"
          /> */}
        </div>
        {!isMobile && (
          <div className="ml20 fcfs" style={{}}>
            {/* USERNAME */}
            <div className="medi14 mb5">{name}</div>
            {/* STATUS */}
            <div className="regu13 paraColor">
              {status && status + `  •  `}
              {time && time}
            </div>
          </div>
        )}
      </button>
    </>
  );
};

export default UserBox;
