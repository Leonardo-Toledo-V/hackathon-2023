import React from "react";

export default function Card({children}) {

    return (
        <div className="">
            <div className="px-12 py-2 bg-[#2a2c3170]">
                {children}
            </div>
        </div>
    );
}
