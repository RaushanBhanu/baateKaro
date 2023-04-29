import { useState } from "react";
import {
  AiOutlineVideoCamera,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { TbSend } from "react-icons/tb";

const MessageArea = ({ name = "Username", img }) => {
  const iconSize = 24;
  const style = { marginLeft: 30 };
  const [msg, setMsg] = useState("");
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
          <img src={img} height={55} width={55} className="br10" alt="user" />
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
        <button>
          <TbSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageArea;
