import { getCookies } from "../../cookies";
import SingleMsgArea from "../common/ChatArea";

const MsgArea = ({ msgs, fromUid }) => {
  const user = getCookies("user");
//   console.log("msgs", msgs?.reverse(), msgs, fromUid, user);
  return (
    <div
      className="p30 w100 fcc"
      style={{
        gap: 10,
        alignSelf: "flex-end",
        flex: 1,
        justifyContent: "flex-end",
        overflow: "scroll",
      }}
    >
      {msgs?.reverse().map((msg, i) => (
        <SingleMsgArea
          key={msg.from + i}
          msg={msg.txt}
          isCurrentUser={user.uid == msg.from}
        />
      ))}
    </div>
  );
};

export default MsgArea;
