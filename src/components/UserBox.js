import { toCapitalise } from "../common/CommonFunctions";
const UserBox = ({
  name = "username",
  status = "texting...",
  time = "10h",
  style = {}
}) => {
  return (
    <>
      <div
        className="frc normalBg br10"
        style={{
          height: 76,
          padding: "10px 8px",
          maxWidth: 363,
          ...style
        }}
      >
        {/* PROFILE ICON */}
        <div className="">
          <img className="br10" height={60} width={60} alt="userProfile" />
        </div>
        <div className="ml20 fccsb" style={{}}>
          {/* USERNAME */}
          <div className="medi14 mb5">{toCapitalise(name)}</div>
          {/* STATUS */}
          <div className="regu13 paraColor">
            {status}{`  •  `}
            {time}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
