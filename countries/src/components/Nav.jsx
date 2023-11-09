import React from "react";

const Nav = () => {
    return (
        <div className="topnav">
            <ul>
                <li>
                    <a href="index.html">
                        <span className="site-title left">
                            Where in the world?
                        </span>
                    </a>
                </li>
                <div className="clear"></div>
                <li>
                    <a
                        href=""
                        className="dark-mode-toggle right"
                        // onClick={toggleDarkMode}
                    >
                        Dark Mode
                    </a>
                </li>
            </ul>
        </div>
    );
};

export { Nav };
