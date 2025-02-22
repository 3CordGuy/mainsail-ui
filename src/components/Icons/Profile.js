import * as React from "react";

function SvgProfile(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <g fill="currentColor">
                <path d="M16.019 0a16.004 16.004 0 00-16 16c0 4.243 1.686 8.313 4.686 11.314a16.004 16.004 0 0022.628 0 16.005 16.005 0 000-22.628C24.33 1.686 20.26 0 16.018 0zM7.2 26.865a11.993 11.993 0 0117.632 0 13.963 13.963 0 01-17.632 0zm19.093-1.368a13.984 13.984 0 00-20.547 0 14.004 14.004 0 0120.047-19.54 13.998 13.998 0 014.223 9.668 13.994 13.994 0 01-3.723 9.872z" />
                <path d="M16.019 6.002a7.002 7.002 0 100 14.003 7.002 7.002 0 000-14.003zm0 12a4.997 4.997 0 01-3.536-8.532 5 5 0 018.534 3.529A5.005 5.005 0 0116.018 18z" />
            </g>
        </svg>
    );
}

export default SvgProfile;
