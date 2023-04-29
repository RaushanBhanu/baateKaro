import { MdPersonAddAlt } from "react-icons/md";
import SearchBox from "../SearchBox";
import UserList from "./UserList";

const UserSelector = () => {
  const addUserBtn = () => {};
  const pinnedUsers = [
    {
      name: "Username",
      status: "Typing...",
      time: "10h",
    },
    {
      name: "User 2",
      status: "Typing...",
      time: "10h",
    },
  ];
  const allUsers = [
    {
      name: "jayesh",
      status: "Typing...",
      time: "10h",
    },
    {
      name: "User 4",
      status: "Typing...",
      time: "10h",
    },
  ];
  return (
    <>
      <div
        className="p10"
        style={{
          width: 383,
          background: "var(--blueGrad)",
          height: "100%",
        }}
      >
        <div className="p10">
          <div className="frcsb mb10">
            {/* HEADING */}
            <div className="h2">Messages</div>
            {/* ADD USER BUTTON */}
            <button onClick={addUserBtn}>
              <MdPersonAddAlt size={24} color="white" />
            </button>
          </div>
          {/* SEARCH USRES */}
          <SearchBox />
          {/* PINNED DROPDOWN */}
          <div className="mt20">
            <UserList heading={"Pinned"} users={pinnedUsers} />
          </div>

          <div className="mt20">
            <UserList heading={"All Messages"} users={allUsers} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSelector;
