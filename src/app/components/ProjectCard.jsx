import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { IoIosCode, IoIosSearch } from "react-icons/io";
const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  category,
  ver,
}) => {
  console.log(category);

  return (
    <div className="relative group">
      {category && (
        <span
          className={`absolute top-4 -left-2 ${category === "new" ? "bg-red-600" : category === "dev" ? "bg-yellow-600" : "bg-gray-600"}  text-white text-sm font-bold px-4 py-1 rounded z-20`}
        >
          {category === "new"
            ? `มาใหม่ ${ver}`
            : category === "dev"
              ? "กำลังพัฒนา"
              : "วางแผน"}
        </span>
      )}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain" }}
      >
        <div className="overlay items-center rounded-t-xl justify-center absolute top-0 left-0 w-full h-full bg-black/80 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl === "/" || (
            <Link
              target="_blank"
              href={gitUrl}
              className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <IoIosCode className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer  group-hover/link:text-white" />
            </Link>
          )}
          {previewUrl === "/" || (
            <Link
              target="_blank"
              href={previewUrl}
              className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <IoIosSearch className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer  group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
