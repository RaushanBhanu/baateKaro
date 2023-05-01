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
  isMobile,
}) => {
  const [foundUsers, setFoundUser] = useState([]);
  const [search, setSearch] = useState("");
  const [hide, setHide] = useState(isMobile);

  const [searching, setSearching] = useState(false);
  const addUserBtn = () => {};
  // const pinnedUsers = [
  //   {
  //     name: "Username",
  //     status: "Typing...",
  //     time: "10h",
  //     uid: "sadasd",
  //   },
  //   {
  //     name: "User 2",
  //     status: "Typing...",
  //     time: "10h",
  //     uid: "reaasas",
  //   },
  // ];
  const [allUsers, setAllUsers] = useState([
    // {
    //   name: "Username3",
    //   status: "Typing...",
    //   time: "10h",
    //   uid: "sadasssd",
    // },
    // {
    //   name: "User 24",
    //   status: "Typing...",
    //   time: "10h",
    //   uid: "reaas",
    // },
  ]);
  useEffect(() => {
    // get users
    getUserChats(uid).then((usrs) => {
      // console.log("====================================");
      // console.log(usrs);
      // console.log("====================================");
      if (Array.isArray(usrs) && usrs.length > 0) {
        console.log("herere");
        setAllUsers(usrs);
      }
    });
  }, [username]);
  // console.log("====================================");
  // console.log(allUsers, "allUsers");
  // console.log("====================================");
  const onChangeActiveUser=(user)=>{
    setActiveUser(user)
    if (!hide && isMobile) {
      setHide(true)
    }
  }
  return (
    <>
      <div
        className="p10"
        style={{
          width: hide ? 120 : 383,
          background: "var(--blueGrad)",
          height: "100%",
        }}
      >
        <div className="p10">
          {!hide && (
            <>
              <div className="frcsb mb10">
                {/* HEADING */}
                <div className="h2">Messages</div>
                {/* ADD USER BUTTON */}
                <button onClick={addUserBtn}>
                  <MdPersonAddAlt size={24} color="white" />
                </button>
              </div>
            </>
          )}
          {/* SEARCH USRES */}
          <div onClick={()=>{
            if (isMobile) {
              setHide(false)
            }
          }}>
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
          </div>

          {/* PINNED DROPDOWN */}
          {foundUsers && foundUsers.length > 0 && (
            <div className="mt20">
              <UserList
                isMobile={hide}
                heading={"Search Results"}
                users={foundUsers}
                activeUser={activeUser}
                setActiveUser={onChangeActiveUser}
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
              isMobile={hide}
              heading={"All Messages"}
              users={allUsers}
              setActiveUser={onChangeActiveUser}
              activeUser={activeUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSelector;
