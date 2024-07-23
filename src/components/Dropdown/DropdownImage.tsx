import Image from "next/image";
import React, { useState } from "react";

const DropdownImage = ({
  options,
  title,
}: {
  options: { image: string; url: string }[];
  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionUrl: string) => {
    setSelectedOption(optionUrl);
    setIsOpen(false);
  };

  return (
    <div className="relative text-lg text-[#41444B] hover:text-gray-800 dark:hover:text-white px-2 py-1">
      <div
        className="flex align-middle cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="mr-2">{title}</div>
        <div
          className={`w-4 flex align-middle transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 w-3/4 bg-white border-2 shadow-lg rounded-xl">
          {options.map((option, index) => (
            <React.Fragment key={option.url}>
              <div className="flex items-center justify-center w-full p-3 space-x-2 hover:bg-[#F2F2F2]">
                <a
                  href={option.url}
                  onClick={() => handleOptionClick(option.url)}
                  className=""
                >
                  <img
                    src={option.image}
                    alt={option.url}
                    className="max-w-[100px]"
                  />
                </a>
              </div>
              {index !== options.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownImage;
