import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gray-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} rounded-full border-2 min-w-[200px] px-4 py-2 text-xl cursor-pointer`}
    >
      {name === "All" ? "รวม" : name === "Web" ? "เว็บไซต์" : "ออกแบบ"}
    </button>
  );
};

export default ProjectTag;
