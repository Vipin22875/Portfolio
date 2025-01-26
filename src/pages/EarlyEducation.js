import React from 'react';
import profileImage from '../image/profile-image.jpg';
import coepImage from '../image/university_home.jpg';
import jrCollege from '../image/jr_college.jpg'
import highSchool from '../image/highSchoolParatwada2.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EarlyEducation = () => {
    const EDUCATION = [
        {
            TITLE: 'College of Engineering Pune',
            DESCRIPTION: 'Graduated B.Tech in 2023 from the College of Engineering, Pune (COEP), a state university established in 1854 and recognized as one of the oldest engineering institutions in Asia.',
            IMAGE: coepImage,
        },
        {
            TITLE: 'Municipal Jr. College',
            DESCRIPTION: 'Completed HSC in 2018 as the town topper, achieving a perfect 100 in Mathematics and excelling across all subjects.',
            IMAGE: jrCollege,
        },
        {
            TITLE: 'City High School',
            DESCRIPTION: 'Achieved a perfect 100 in Mathematics and outstanding results overall during SSC in 2016.',
            IMAGE: highSchool,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
    };

    return (
        <React.Fragment>
            <div className='carousel-container mt-5'>
            <h1 className='fs-42 fw-400 text-center portfolio-name'>
                Education
            </h1>
            <Slider {...settings}>
                {EDUCATION.map((el, index) => (
                    <div key={index} className="slider-item">
                        <div className="">
                            <img src={el.IMAGE} alt={el.TITLE} className="slider-image" />
                            <div className="overlay">
                                <h3>{el.TITLE}</h3>
                                <p>{el.DESCRIPTION}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </React.Fragment>
    );
};

export default EarlyEducation;
