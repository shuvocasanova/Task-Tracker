import React from "react";

const Header = ({ onAdd, showAdd }) => {
  const handleClick = () => {
    onAdd();
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button style={{backgroundColor: showAdd ? 'red' : 'green'}} onClick={handleClick} className="btn">
        {showAdd ? "Close" : "Add"}
      </button>
    </header>
  );
};

export default Header;
