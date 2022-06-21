import React from "react";

const Header = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button onClick={handleClick} className="btn">
        Add
      </button>
    </header>
  );
};

export default Header;
