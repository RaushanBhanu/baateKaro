import UserBox from "../UserBox";
import DropdownMenu from "../common/DropdownMenu";

const UserList = ({
  users = [],
  isMobile,
  heading,
  activeUser = "",
  setActiveUser = () => {},
}) => {
  const Users = [...users];
  console.log('====================================');
  console.log(isMobile);
  console.log('====================================');
  return (
    <>
      <DropdownMenu
      isMobile={isMobile}
        heading={heading}
        active={true}
        element={
          <div style={{ marginTop: 15 }}>
            {Users?.map((user, i) => (
              <UserBox
              isMobile={isMobile}
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                {...user}
                key={user.name + i}
                user={user}
                style={{ marginBottom: 10, width: !isMobile?343:80 }}
              />
            ))}
          </div>
        }
      />
    </>
  );
};

export default UserList;
