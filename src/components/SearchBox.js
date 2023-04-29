import { BiSearch } from "react-icons/bi";
import TextBox from "./common/TextBox";
import { useState } from "react";
const SearchBox = () => {
  const [input, setInput] = useState("");
  const onSearch = () => {};
  return (
    <TextBox
      element={
        <>
          <button onClick={onSearch}>
            <BiSearch size={24} color="white" />
          </button>
        </>
      }
      placeholder="Search..."
      input={input}
      onChange={(e) => {
        // console.log(e.target.value);
        setInput(e.target.value);
      }}
    />
  );
};

export default SearchBox;
