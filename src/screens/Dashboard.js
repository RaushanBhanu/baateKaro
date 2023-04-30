import LeftMenu from "../components/leftMenu/LeftMenu";
import UserSelector from "../components/dashboard/UserSelector";
import MessageArea from "../components/dashboard/MessageArea";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { getCookies } from "../cookies";

const Dashboard = () => {
  const [cookies] = useCookies(["user"]);
  const [user, setUser] = useState(getCookies("user"));
  const [activeUser, setActiveUser] = useState("Username");
  useEffect(() => {
    try {
      setUser(getCookies("user"));
    } catch (error) {
      console.log(error, " in setUser(JSON.pars");
    }
  }, [cookies]);
  console.log("user in dashboard", user);
  return (
    <div className="frfs h-[100vh]">
      <LeftMenu username={user?.name} email={user?.email} img={user?.img} />
      <UserSelector
      uid={user?.uid}
        username={user?.name}
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
      <MessageArea
        name={activeUser?.name}
        img={activeUser?.img}
        chatUid={activeUser?.uid}
        userId={user?.uid}
        mainUsername={user?.name}
      />
    </div>
  );
};

export default Dashboard;
