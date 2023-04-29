import { BiLogOut } from "react-icons/bi";
const LogoutBtn = () => {
  return (
    <>
    {/* LOGOUT BTN */}
      <button
        className="frc"
        style={{
          boxSizing:"border-box"
        }}
      >
        <BiLogOut size={24} />
        <div className="frc ml10 medi14">Logout</div>
      </button>
    </>
  );
};

export default LogoutBtn;
