import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <FaInstagram />
            </div>
            <p> &copy; 2022 evanli.com</p>
        </div>
    )
}

export default Footer; 