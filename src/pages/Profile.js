import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { SOCIAL_PLATOFORM } from './constants/portfolioConstants'
import profileImage from '../image/profile-image.jpg'
const Profile = () => {
    return (
        <React.Fragment>
            <div className='d-flex align-items-center justify-content-center mt-5 ms-4'>
                <Card className='me-4 work-ex-card'>
                    <div className='fw-600 text-bold ms-3 fs-45 portfolio-name'>
                        Vipin Ingle
                    </div>
                    <CardBody className='fs-18'>
                        <div className='d-flex align-items-center'>
                            <div>

                                Hi 👋, I'm <span className='portfolio-name'>Vipin. </span>
                                Software Engineer at
                                <a href='https://ikshalabs.com/' target='_blank' className='ms-1 portfolio-company-name fw-600'>
                                    Iksha Labs.
                                </a>
                                <p>
                                    Passionate software developer with a strong computer science foundation and a focus on creating user-friendly applications. Skilled in balancing technical expertise and creativity to deliver high-quality results efficiently.
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
                            </div>
                            <img src={profileImage} alt='' className='profile-image-container' />
                        </div>
                    </CardBody>

                </Card>
            </div>
        </React.Fragment>
    )
}

export default Profile
