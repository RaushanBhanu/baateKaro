import UserBox from "../UserBox";
import DropdownMenu from "../common/DropdownMenu";

const UserList = ({
  users = [],
  heading,
  activeUser = "",
  setActiveUser = () => {},
}) => {
  const Users = [...users];
  return (
    <>
      <DropdownMenu
        heading={heading}
        active={true}
        element={
          <div style={{ marginTop: 15 }}>
            {Users?.map((user, i) => (
              <UserBox
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                {...user}
                style={{ marginBottom: 10, width: 343 }}
                key={user.name + i}
                user={user}
              />
            ))}
          </div>
        }
      />
    </>
  );
};

export default UserList;
