import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import "../styles/Home.css"

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2> Hi, My Name is Evan</h2>
                <div className='prompt'>
                    <p>
                        A software developer with a passion for learning and creating.
                    </p>
                    <FaLinkedin />
                    <FaGithub />
                    <GoMail />
                </div>
            </div>
            <div className='skills'>
                    <h1> Skills</h1>
                    <ol className='list'>
                        <li className='item'>
                            <h2> Front-End</h2>
                            <span>
                                ReactJS, HTML, CSS, NPM
                            </span>
                        </li>
                        <li className='item'>
                            <h2> Back-End</h2>
                            <span> 
                                NodeJS
                            </span>
                        </li>
                        <li className='item'>
                            <h2> Languages</h2>
                            <span> 
                                JavaScript, Python, C#, C++, 
                            </span>
                        </li>
                    </ol>
                </div>
        </div>
    )
}

export default Home