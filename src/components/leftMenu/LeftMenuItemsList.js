const LeftMenuItemsList = ({
  items = [{ name: "", icon: () => <></>, onClick: () => {} }],
  active = "",open=true
}) => {
  return (
    <>
      {items
        ?.filter((item) => item)
        .map((item, i) => (
          <button
            key={item + i}
            className="frc p10 br10 mb15"
            style={{
              backgroundColor: active === item.name ? "var(--dark)" : "unset",
              width:open?"100%":"unset"
            }}
            onClick={() => item.onClick(item.name)}
          >
            {/* ICON */}
            <div>{item.icon(active === item.name)}</div>
            {/* TEXT */}
           {open&& <div
              className="medi16 ml10"
              style={{
                color: active === item.name ? "var(--primary)" : "white",
              }}
            >
              {item.name}
            </div>}
          </button>
        ))}
    </>
  );
};

export default LeftMenuItemsList;
