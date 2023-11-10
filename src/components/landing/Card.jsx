import React from "react";

export default function Card({children}) {

    return (
        <div className="flex flex-col items-center justify-center bg-[#2a2c3135] py-6 ">
            <div className="text-4xl font-semibold">
                {children}
            </div>
            <div className="text-[#ffffffca] text-sm ">
            Creators on the platform
            </div>
        </div>
    );
}


