import { toCapitalise } from "../common/CommonFunctions";
const UserBox = ({
  username = "username",
  status = "texting...",
  time = "10h",
}) => {
  return (
    <>
      <div
        className="frc normalBg br10"
        style={{
          height: 76,
          padding: "10px 8px",
          maxWidth: 363,
        }}
      >
        {/* PROFILE ICON */}
        <div className="">
          <img className="br10" height={60} width={60} alt="userProfile" />
        </div>
        <div className="ml20 fccsb" style={{}}>
          {/* USERNAME */}
          <div className="medi14 mb5">{toCapitalise(username)}</div>
          {/* STATUS */}
          <div className="regu13 paraColor">
            {status}
            {time}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
