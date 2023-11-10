import React from "react";

export default function Card({children}) {

    return (
        <div className="max-w-[440px]">
            <div className="px-12 py-2">
                {children}
            </div>
        </div>
    );
}
