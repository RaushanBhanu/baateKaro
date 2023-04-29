import LeftMenu from "../components/leftMenu/LeftMenu";
import UserSelector from "../components/dashboard/UserSelector";
import MessageArea from "../components/dashboard/MessageArea";

const Dashboard = () => {
    return (
        <div className="frfs h-[100vh]" >
        <LeftMenu/>
        <UserSelector/>
        <MessageArea/>
        </div>
    );
}

export default Dashboard;