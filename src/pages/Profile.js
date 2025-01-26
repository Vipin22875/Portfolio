import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { SOCIAL_PLATOFORM } from './constants/portfolioConstants'
import profileImage from '../image/profile-image.jpg'
const Profile = () => {
    return (
        <React.Fragment>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <Card className='me-4'>
                    <div className='fw-600 text-bold ms-3 fs-45 portfolio-name'>
                        Vipin Ingle
                    </div>
                    <CardBody className='fs-18'>
                        Hi 👋, I'm <span className='portfolio-name'>Vipin. </span>
                        Software Engineer at
                        <a href='https://ikshalabs.com/' target='_blank' className='ms-1 portfolio-company-name fw-600'>
                            Iksha Labs.
                        </a>
                        <p>
                            Passionate frontend developer with a robust foundation 
                            in computer science and a keen eye for detail.
                        </p>
                        <p>
                            Connect with me on these platforms.
                        </p>
                        <div className='w-40 d-flex justify-content-between'>
                            {
                                SOCIAL_PLATOFORM.map((platform) => {
                                    return <a href={platform.HREF} target='_blank'><i class={`ci ci-${platform.ICON_NAME} ci-2x`}></i></a>
                                })
                            }
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <img src={profileImage} alt='' className='profile-image-container' />
                </Card>
            </div>
        </React.Fragment>
    )
}

export default Profile
