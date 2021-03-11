import React from 'react'
import "./nav.css"
import { useEffect, useState } from 'react'

function Nav() {
    //  add a scroll lister for the nav bar background to change from transparent to black on y axis down by 100
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {
                handleShow(true);
            }
            else
                handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix_logo" />
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
        </div>
    )
}

export default Nav
