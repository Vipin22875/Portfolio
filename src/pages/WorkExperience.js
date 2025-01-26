import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import iksha from '../image/ikshalabs.png'
const WorkExperience = () => {
    return (
        <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
            <div className='work-ex-card'>
                <h1 className='portfolio-bold-names'>Work Experience</h1>
                <CardBody>
                    <div className='d-flex align-items-center'>
                        <div>
                            <div className="d-flex align-items-center justify-content-between portfolio-name">
                                <div className="d-flex align-items-center">
                                    <img src={iksha} alt="Iksha Labs" width="60px" className="me-2" />
                                    <h3 className="fw-600 mb-0">Iksha Labs</h3>
                                </div>
                                <span>June 2023 - Present</span>
                            </div>
                            <div >
                                <p className='ms-2 text-justify'>
                                    Collaborated closely with software development and testing teams to design and develop robust solutions tailored to client requirements, ensuring optimal functionality, scalability, and performance. During my tenure, I contributed to two diverse projects that showcased my versatility and technical acumen:
                                </p>
                                <ul>
                                    <li>
                                        <strong>B2B Insurance Platform:</strong> Developed a B2B website for clients to sell insurance products to their customers. This required an in-depth understanding of the insurance industry and the ability to create a user-friendly, secure, and scalable platform. Contributions included designing the user interface, implementing backend functionalities, and ensuring high-performance standards.
                                    </li>
                                    <li>
                                        <strong>Automated Interview Bot:</strong> Created an automated interview bot aimed at streamlining the recruitment process for businesses. This solution utilized advanced algorithms and machine learning techniques to evaluate candidates effectively, reducing time and effort for initial screening. Contributions involved developing and integrating key components of the bot to ensure accurate and reliable results.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </div>
        </div>
    )
}

export default WorkExperience
