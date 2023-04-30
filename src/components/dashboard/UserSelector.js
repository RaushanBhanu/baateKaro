import { MdPersonAddAlt } from "react-icons/md";
import SearchBox from "../SearchBox";
import UserList from "./UserList";
import { useEffect, useState } from "react";
import { getUserChats, getUserUsingName } from "../../queries/firebaseQuery";

const UserSelector = ({
  username,
  activeUser,
  setActiveUser = () => {},
  uid,
}) => {
  const [foundUsers, setFoundUser] = useState([]);
  const [search, setSearch] = useState("");

  const [searching, setSearching] = useState(false);
  const addUserBtn = () => {};
  const pinnedUsers = [
    {
      name: "Username",
      status: "Typing...",
      time: "10h",
      uid: "sadasd",
    },
    {
      name: "User 2",
      status: "Typing...",
      time: "10h",
      uid: "reaasas",
    },
  ];
  const [allUsers, setAllUsers] = useState([
    {
      name: "Username3",
      status: "Typing...",
      time: "10h",
      uid: "sadasssd",
    },
    {
      name: "User 24",
      status: "Typing...",
      time: "10h",
      uid: "reaas",
    },
  ]);
  useEffect(() => {
    // get users
    getUserChats(uid).then((usrs) => {
      console.log("====================================");
      console.log(usrs);
      console.log("====================================");
      if (Array.isArray(usrs) && usrs.length > 0) {
        console.log("herere");
        setAllUsers(usrs);
      }
    });
  }, [username]);
  console.log('====================================');
  console.log(allUsers,"allUsers");
  console.log('====================================');
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
          <SearchBox
            onSearch={async () => {
              setSearching(true);
              console.log("search for", search);
              if (search != username) {
                const users = await getUserUsingName(search);
                if (!(users && users.length > 0)) {
                  alert("no user found");
                }
                setFoundUser(users);
              }
              setSearching(false);
            }}
            disabled={searching}
            input={search}
            setInput={setSearch}
          />
          {/* PINNED DROPDOWN */}
          {foundUsers && foundUsers.length > 0 && (
            <div className="mt20">
              <UserList
                heading={"Search Results"}
                users={foundUsers}
                activeUser={activeUser}
                setActiveUser={setActiveUser}
              />
            </div>
          )}
          {/* <div className="mt20">
            <UserList
              heading={"Pinned"}
              users={pinnedUsers}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
            />
          </div> */}
          <div className="mt20">
            <UserList
              heading={"All Messages"}
              users={allUsers}
              setActiveUser={setActiveUser}
              activeUser={activeUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSelector;
