const Button = ({ text, onclick, disabled, width = "100%" }) => {
  return (
    <div>
      <button
        disabled={disabled}
        className={`pt-${width !== "100%" ? "3" : "4"} pb-${
          width !== "100%" ? "3" : "4"
        } rounded-2xl font-semibold w-[${width}]`}
        onClick={onclick}
        style={{
          background: "var(--lBlueGradHori)",
          boxShadow:
            "0px 17px 24px rgba(0, 0, 0, 0.1), 0px 8px 20px rgba(0, 0, 0, 0.1), inset 0px 18px 21px rgba(255, 255, 255, 0.1), inset 0px 3px 6px rgba(255, 255, 255, 0.4), inset 0px -2px 6px rgba(36, 42, 48, 0.6)",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
