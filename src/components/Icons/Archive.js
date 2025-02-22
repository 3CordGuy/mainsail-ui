import * as React from "react";

function SvgArchive(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                d="M2.667 0C1.205 0 0 1.162 0 2.571v1.715c0 1.109.748 2.054 1.778 2.41v14.612C1.778 22.785 3.04 24 4.573 24h22.854c1.533 0 2.795-1.215 2.795-2.692V6.697C31.252 6.34 32 5.395 32 4.286V2.571C32 1.161 30.795 0 29.333 0H2.667zm0 1.715h26.666c.509 0 .889.368.889.856v1.715c0 .49-.38.857-.889.857H2.667c-.509 0-.889-.367-.889-.857V2.571c0-.488.38-.856.889-.856zm.888 5.142h24.888v14.451c0 .558-.438.98-1.016.98H4.574c-.579 0-1.019-.422-1.019-.98V6.858zm7.112 1.715v1.715h10.666V8.572H10.667z"
                fill="currentColor"
            />
        </svg>
    );
}

export default SvgArchive;
