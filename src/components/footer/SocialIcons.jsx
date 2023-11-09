import React from "react";
import {Button} from "@nextui-org/react";

const SocialIcons = ({ Icons }) => {
    return (
        <div className="text-teal-500">
            {Icons.map((icon) => (
                <span
                    key={icon.name}
                    className="p-2 cursor-pointer inline-flex items-center
                    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-gray-600
                    duration-300"
                >
                   <img className="w-4" src={`/${icon.name}.png`}/>
                </span>
            ))}
        </div>
    );
};

export default SocialIcons;