import React from "react";

export default function Card({children}) {

    return (
        <div className="flex flex-col items-center justify-center bg-[#2a2c3135] py-6">
            <div className="text-4xl">
                {children}
            </div>
            <div className="text-white ">
            Creators on the platform
            </div>
        </div>
    );
}


