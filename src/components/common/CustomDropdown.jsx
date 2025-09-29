import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CustomDropdown = ({ options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown w-[200px] md:w-[300px]">
      <div className="dropdown-header text-sm md:text-xl bg-[#AE844A]" onClick={handleToggle}>
        {selectedOption || "Select an option"}
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <FontAwesomeIcon icon={faChevronDown} className="text-sm md:text-xl" />
        </span>
      </div>
      <div
        className={`dropdown-menu ${isOpen ? "open border border-[#AE844A]" : ""}`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`dropdown-item text-sm md:text-xl ${option === selectedOption ? "selected" : ""}`}
            onClick={() => handleSelect(option)}
          >
            {isOpen && option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
