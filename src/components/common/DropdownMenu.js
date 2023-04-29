import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const DropdownMenu = ({ heading = "Pinned", element, active = true }) => {
  const [Active, setActive] = useState(active);
  return (
    <>
      <div>
        {/* HEADINGS */}
        <div className="frcsb lightText">
          <div className="medi12">{heading}</div>
          <button
            onClick={() => {
              setActive(!Active);
            }}
          >
            {Active ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
          </button>
        </div>
        {/* DROPDOWN LIST */}
        {Active && element}
      </div>
    </>
  );
};

export default DropdownMenu;
