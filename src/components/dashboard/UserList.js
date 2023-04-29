import UserBox from "../UserBox";
import DropdownMenu from "../common/DropdownMenu";

const UserList = ({ users = [], heading }) => {
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
                {...user}
                style={{ marginBottom: 10 }}
                key={user.name + i}
              />
            ))}
          </div>
        }
      />
    </>
  );
};

export default UserList;
