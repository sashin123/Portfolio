import React from "react"
import Fiee from "react-typed"
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Software Developer and Web Developer</h1>
                <Fiee 
                    className="fie-text"
                    strings={["Web Development", "Software Development", "Web Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
