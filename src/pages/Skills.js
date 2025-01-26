import React from 'react';

const Skills = () => {
    const SKILLS = [
        { key: 'React JS', name: 'react' },
        { key: 'Python', name: 'python' },
        { key: 'SQL', name: 'mysql' },
        { key: 'Javascript', name: 'js' },
        { key: 'Redux', name: 'redux' },
        { key: 'HTML', name: 'html' },
        { key: 'Css', name: 'css' },

    ];

    return (
        <React.Fragment>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='w-100 card-wrapper mt-5'>
                    <h1 className='fs-42 fw-400 text-center portfolio-name mt-2 mb-3'>
                        Skills
                    </h1>
                    <div className='d-flex flex-wrap justify-content-center w-100'>
                        {
                            SKILLS.map((el) => {
                                return (
                                    <div key={el.name} className={`text-center mx-4`}>
                                        <i className={`ci ci-${el.name} ci-5x`}></i>
                                        <p className='portfolio-name'>{el.key}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Skills;
