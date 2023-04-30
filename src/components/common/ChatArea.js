const SingleMsgArea = ({ isCurrentUser = false, msg }) => {
  return (
    <div
      className="w100 fcc"
      style={{ alignItems: isCurrentUser ? "flex-end" : "flex-start" }}
    >
      <div
        className={`${
          isCurrentUser ? "rounded-tl-lg" : "rounded-tr-lg"
        } rounded-bl-lg rounded-br-lg regu14`}
        style={{
          background: isCurrentUser ? "var(--primary)" : "var(--dark)",
          padding: "5px 7px",
          width: "fit-content",
        }}
      >
        {msg}
      </div>
    </div>
  );
};

export default SingleMsgArea;
