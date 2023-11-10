import React from "react";

const Nav = () => {
    return (
        <div className="topnav">
            <a href="index.html" className="site-title">
                Where in the world?
            </a>
            <div className="clear"></div>
            <a href="#" className="dark-mode-toggle">
                Dark Mode
            </a>
        </div>
    );
};

export { Nav };
