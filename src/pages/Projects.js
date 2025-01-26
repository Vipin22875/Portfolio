import React, { useState } from 'react'
import { Card, CardBody, Collapse } from 'reactstrap'
import cricket from '../image/cricket2.webp'
import osImage from '../image/os.png'
import dsa from '../image/dsa2.avif'
import uber from '../image/uber.avif'
import shoe from '../image/shoe.jpg'
const Projects = () => {

    const [activeAccordion, setActiveAccordion] = useState([])
    console.log(activeAccordion, "activeAccordion")
    const checksandSetActiveAccordion = (accordionid) => {
        if (activeAccordion.includes(accordionid)) {
            const filteredArray = activeAccordion.filter((el) => el !== accordionid)
            setActiveAccordion(filteredArray)
            return
        }
        setActiveAccordion((prev) => [
            ...prev, accordionid
        ])
    }
    const checkifOpen = (accordionid) => {
        console.log(accordionid, "accordionidaccordionid")
        return activeAccordion.includes(accordionid)
    }
    const PROJECTS = [
        {
            NAME: 'Cricet Score Card Management',
            DESP: 'A comprehensive database system designed to assist users in maintaining detailed records of all matches stored in the database while also providing real-time tracking of ongoing live matches. This system ensures seamless management and updates of player performance records, offering an organized and efficient way to monitor individual and team statistics. By automatically updating player performance metrics based on match outcomes, it delivers accurate and up-to-date insights, making it an indispensable tool for sports analysts, teams, and enthusiasts. Additionally, the system enhances accessibility and usability by offering a centralized platform for match history, live updates, and performance evaluations.',
            IMAGE: cricket,
            LINK: 'https://github.com/Vipin22875/Cricket-Score-Card'
        },
        {
            NAME: 'Online Shoe Center',
            DESP: 'Developed an Online Shoe Center using Bootstrap, CSS, and JavaScript to deliver a responsive and visually appealing user interface.The platform provides key features such as Login, Signup, and Add to Cart functionality, ensuring a smooth and interactive shopping experience for users.Integrated dynamic product displays and filtering options to enhance user convenience.Emphasized secure authentication for user accounts and efficient cart management for seamless transactions.Designed the interface to be mobile-friendly, ensuring accessibility across devices.The project highlights a blend of front-end technologies to create a functional and user-centric e-commerce platform.',
            IMAGE: shoe,
            LINK: 'https://github.com/Vipin22875/Data-Science-Project'
        },
        {
            NAME: 'OS Kernel Threads',
            DESP: 'In this project, we integrated support for kernel threads into the xv6 operating system, a modern re-implementation of the Sixth Edition Unix in ANSI C. The implementation involved adding key system calls such as clone, join, and tkill, along with a comprehensive set of functions in the userland library to facilitate seamless user interaction with the threading functionality.This enhancement not only introduced multi-threading capabilities to xv6 but also provided a robust framework for parallelism, allowing processes to spawn and manage lightweight threads efficiently. These changes significantly improved the systems performance and usability, offering an enriched environment for exploring modern operating system concepts.',
            IMAGE: osImage,
            LINK: 'https://gitlab.com/VipinIngle/xv6'
        },
        {
            NAME: 'Binary Calculator',
            DESP: 'The bc command is a versatile Linux command-line utility, short for "basic calculator," that provides an environment for performing arithmetic operations and advanced mathematical calculations. It supports features such as floating-point arithmetic, scale settings for controlling decimal precision, and even conditional and logical expressions, making it suitable for both simple calculations and scripting complex operations.When invoked, the bc command opens an interactive shell where users can input mathematical expressions in a syntax resembling C programming, offering flexibility for programmers and system administrators. Additionally, it can be used in scripts by piping input directly, allowing automation of repetitive calculations. Its support for standard mathematical functions, variable assignments, and modular arithmetic makes it an indispensable tool for scientific and technical computations on the Linux terminal.',
            IMAGE: dsa,
            LINK: 'https://github.com/Vipin22875/BINARY-CALCULATOR'
        },
        {
            NAME: 'Uber Pickup anaysis',
            DESP: 'With the increasing complexity of traffic patterns and urban growth, the need for advanced tools to analyze traffic data has become essential. Traffic data analysis involves collecting, processing, and interpreting information such as vehicle speeds, travel times, and traffic volume. By using technologies like sensors and GPS, it helps identify congestion patterns, optimize traffic flow, and improve road safety. These insights enable transportation authorities and urban planners to make informed decisions for better traffic management and sustainable city planning.',
            IMAGE: uber,
            LINK: 'https://github.com/Vipin22875/Data-Science-Project'
        },
    ]
    return (
        <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
            <div className='work-ex-card'>
                <h1 className='portfolio-bold-names mb-4'>Projects</h1>
                <CardBody>
                    <div className="accordion" id="integrations">

                        {
                            PROJECTS.map((el, index) => {
                                return (
                                    <>
                                        {index === 2 && <p className='portfolio-name fs-22 fw-600 text-deoration-underline mx-2'> Side Projects: </p>}
                                        <div className="accordion-item rounded sf-pro-shadow-wrapper mb-3 mx-2">
                                            <h2 className="accordion-header">
                                                <button
                                                    className=
                                                    "accordion-button rounded border-0 font-size-14 text-black shadow-none font-weight-semibold portfolio-name"
                                                    type="button"
                                                    onClick={() => checksandSetActiveAccordion(index)} >
                                                    {el.NAME}
                                                </button>
                                            </h2>
                                            <Collapse isOpen={checkifOpen(index)} className="accordion-collapse mt-3">
                                                <div className="accordion-body pt-0 mt-2">
                                                    <div className='d-flex align-items-center justify-content-center'>
                                                        <img src={el.IMAGE} alt='' className='project-images me-5' />
                                                        <p className='text-justify'>
                                                            {el.DESP} <a href={el.LINK}>Try It!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                </CardBody>
            </div>
        </div>
    )
}

export default Projects
