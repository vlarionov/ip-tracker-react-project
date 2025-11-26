import { useState } from "react";
import { apiParsing } from "../utils/apiParsing";

function SearchBar(props) {
  const [text, setText] = useState("");

  // const handleClick = () => {
  async function handleClick() {
    //console.log(text);
    // props.setApiData(testReplaceData);
    let replaceData = await apiParsing(text);
    if (replaceData) {
      props.setApiData(replaceData);
    }
    
    setText("");
    return null;
  };



  return (
    <div id="searchBar">
      <input
        type="text"
        id="ipInputField"
        placeholder="Search a domain or IPv4 address"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button id="searchIP" onClick={handleClick}>
        <img src="./src/images/icon-arrow.svg" alt="Right arrow Icon" />
      </button>
    </div>
  );
}

export default SearchBar;
