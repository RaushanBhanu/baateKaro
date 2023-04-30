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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  useEffect(() => {
    try {
      setUser(getCookies("user"));
    } catch (error) {
      console.log(error, " in setUser(JSON.pars");
    }
  }, [cookies]);
  console.log("user in dashboard", user);
  useEffect(() => {
    // setIsMobile(window.screen.width < 1000);
    const handleWindowResize = () => {
      console.log(window.innerWidth);
      setIsMobile(window.innerWidth<1000)
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div className="frfs h-[100vh]">
      <LeftMenu username={user?.name} isMobile={isMobile} email={user?.email} img={user?.img} />
      <UserSelector
        uid={user?.uid}
        username={user?.name}
        activeUser={activeUser}
        setActiveUser={setActiveUser}
        isMobile={isMobile}
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
