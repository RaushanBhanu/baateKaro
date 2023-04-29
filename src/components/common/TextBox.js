const TextBox = ({
  element,
  height = 52,
  width = 343,
  input = "",
  onChange = () => {},
  type = "text",
  placeholder = "",
  inputStyle,
  inputClass,
  style,
  outerClass,
  maxLength
}) => {
  return (
    <>
      <div
        className={`normalBg frc br10 ${outerClass}`}
        style={{
          height: height,
          maxWidth: width,
          padding: "12px 15px",
          border: "1px solid var(--lightBorder)",
          ...style,
        }}
      >
        <input
          placeholder={placeholder}
          type={type}
          value={input}
          onChange={onChange}
          className={`bgNone mr15 ${inputClass}`}
          style={{
            width: "100%",
            height: "100%",
            ...inputStyle,
          }}
          maxLength={maxLength}
        />
        {element}
      </div>
    </>
  );
};

export default TextBox;
