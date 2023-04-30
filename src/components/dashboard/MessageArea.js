import { useEffect, useState } from "react";
import {
  AiOutlineVideoCamera,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { localStorageGetData, localStorageStoreData } from "../../webStorage";
import {
  addNewMsgToChat,
  createChat,
  getChatId,
  pathChatsChat,
} from "../../queries/firebaseQuery";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import Avatar from 'react-avatar';
import MsgArea from "./MsgArea";

const MessageArea = ({ name, img, userId, chatUid: toUid, mainUsername }) => {
  // console.log("uids", userId, toUid);
  const iconSize = 24;
  const style = { marginLeft: 30 };
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [loading, setloading] = useState(false);
  const [chatId, setchatId] = useState("");
  // ON LOAD GET MESSAGES IF NOT IN LOCAL STORAGE AND SAVE TO LOCAL STORAGE ELSE GET FROM LCOAL
  useEffect(() => {
    setloading(true);
    const getChatIdd = async () => {
      return (
        localStorageGetData(userId + toUid) ?? (await getChatId(userId, toUid))
      );
    };

    getChatIdd()
      .then(async (id) => {
        console.log(id, "id");
        if (!id || !(id && id.length > 0)) {
          // create chat doc
          id = await createChat(userId, toUid, mainUsername, name);
        }
        localStorageStoreData(userId + toUid, id);
        setchatId(id);
      })
      .finally(() => {
        setloading(false);
      });
  }, [userId, toUid, mainUsername, name]);

  useEffect(() => {
    try {
      setloading(true);
      if (!chatId) {
        // create chat doc
        // cid = createChat(userId, chatUid);
        return;
      }
      // console.log("caht id", chatId);
      const path = query(pathChatsChat(chatId), orderBy("tm", "asc"));
      if (!path) {
        return;
      }

      const getChatData = onSnapshot(
        pathChatsChat(chatId),
        (docs) => {
          setloading(true);
          const msgss = [];
          docs.forEach((item) => {
            console.log(item.id, "=>", item.data());
            msgss.push(item.data());
          });
          console.log("data got is", msgss);
          msgss?.sort((a, b) => {
            const timeA = a.tm?.seconds * 1000 + a.tm?.nanoseconds / 1000000;
            const timeB = b.tm?.seconds * 1000 + b.tm?.nanoseconds / 1000000;
            return timeA - timeB;
          });
          setloading(false);
          setMsgs(msgss);
        },
        () => {}
      );

      return () => getChatData();
    } catch (error) {
      console.log(error, " in on napshot");
    }
  }, [chatId]);

  // console.log("CHAT ID IS", chatId);
  // console.log("MSGS", msgs);
  if (loading && !userId) {
    return <div>Loading</div>;
  }
  if (!(userId && name)) {
    return <></>;
  }
  return (
    <div className="fccsb" style={{ flex: 1, height: "100%" }}>
      {/* HEADER */}
      <div
        className="frcsb w100"
        style={{
          padding: "20px 30px",
          boxShadow:
            "0px 17px 24px rgba(0, 0, 0, 0.1), 0px 8px 20px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* NAME */}
        <div className="frc">
          {/* <img src={img} height={55} width={55} className="br10" alt="user" /> */}
          <Avatar name={name} size="55" round="10px"  />
          <div className="h3 ml15">{name}</div>
        </div>
        {/* ICONS */}
        <div className="frc">
          {/* AUDIO */}
          <button style={style}>
            <AiOutlinePhone size={iconSize} />
          </button>
          {/* VIDEO */}
          <button style={style}>
            <AiOutlineVideoCamera size={iconSize} />
          </button>
          {/* INFO */}
          <button style={style}>
            <AiOutlineInfoCircle size={iconSize} />
          </button>
        </div>
      </div>
      <MsgArea msgs={msgs} />
      {/* FOOTER */}
      <div
        style={{
          backgroundColor: "var(--dark)",
          height: 50,
          width: "90%",
          padding: "0 20px",
        }}
        className="br10 mb20 frc"
      >
        <input
          placeholder={"Enter message here"}
          type={"text"}
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          className={`bgNone mr15 regu13`}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <button className={`mr-4`}>
          <BsFillEmojiHeartEyesFill size={20} />
        </button>
        <button
          disabled={!msg || !(msg && msg.length > 0)}
          onClick={async () => {
            const chatMsg = {};
            if (typeof msg == "string") {
              chatMsg["txt"] = msg;
            }
            // send message
            await addNewMsgToChat(chatId, chatMsg, userId);
            setMsg("");
          }}
        >
          <TbSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageArea;
