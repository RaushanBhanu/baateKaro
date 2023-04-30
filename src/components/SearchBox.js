import { BiSearch } from "react-icons/bi";
import TextBox from "./common/TextBox";

const SearchBox = ({
  onSearch,
  disabled = false,
  input,
  setInput = () => {},
}) => {
  return (
    <TextBox
      element={
        <>
          <button disabled={disabled} onClick={onSearch}>
            <BiSearch size={20} color="white" />
          </button>
        </>
      }
      placeholder="Search..."
      inputClass={"regu13"}
      input={input}
      onChange={(e) => {
        // console.log(e.target.value);
        setInput(e.target.value);
      }}
    />
  );
};

export default SearchBox;
