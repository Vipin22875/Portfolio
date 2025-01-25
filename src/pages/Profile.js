import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader } from 'reactstrap'

const Profile = () => {
    return (
        <React.Fragment>
            <div className='d-flex align-items-center justify-content-center'>
                <Card>
                    <div className='fw-600 text-bold ms-3 fs-45 portfolio-name'>
                        Vipin Ingle
                    </div>
                    <CardBody>
                        Hi 👋, I'm <span className='portfolio-name'>Vipin. </span> 
                        Software Engineer -
                        <a href='https://ikshalabs.com/' target='_blank' className='portfolio-company-name fw-600'>
                            Iksha Labs
                        </a>
                        <p>
                            Building tech with 
                            <span className='react-color fw-800'> React</span>,
                            <span className='python-color fw-800'> Python</span>,
                            <span className='ruby-color fw-800'> Ruby on Rails </span>and
                            <span className='sql-color fw-800'> SQL</span>.
                        </p>
                        <p>
                            Connect with me on these platforms.
                        </p>
                        <div className='w-50 d-flex justify-content-between'>
                            <a href=''><i class="ci ci-github ci-2x"></i></a>
                            <a href=''><i class="ci ci-linkedin ci-2x"></i></a>
                            <a href=''><i class="ci ci-gmail ci-2x"></i></a>
                            <a href=''><i class="ci ci-spotify ci-2x"></i></a>
                        </div>
                        
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default Profile
