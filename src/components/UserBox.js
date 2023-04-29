const userBox = ({username ="username",status,time}) => {
  return (
    <>
      <div className="frc">
        {/* PROFILE ICON */}
        <div></div>
        <div>
          {/* USERNAME */}
          <div>
            {username}
          </div>
          {/* STATUS */}
          <div>
            {status}{time}
          </div>
        </div>
      </div>
    </>
  );
};

export default userBox;
