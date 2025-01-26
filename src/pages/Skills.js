import React, { useEffect } from 'react';
import anime from 'animejs';

const Skills = () => {
    useEffect(() => {
        anime({
            targets: '.skill-icon',
            rotate: '360deg',
            duration: 2000,
            easing: 'easeInOutSine',
            loop: true
        });
        anime({
            targets: '.mysql',
            translateY: [-10, 0],
            duration: 600,
            easing: 'easeInOutSine',
            loop: true,
            direction: 'alternate'
        });
    }, []);

    const SKILLS = [
        { key: 'React JS', name: 'react' },
        { key: 'Python', name: 'python' },
        { key: 'SQL', name: 'mysql' },
        { key: 'Javascript', name: 'js' },
        { key: 'Redux', name: 'redux' },
        { key: 'HTML', name: 'html' },
        { key: 'Css', name: 'css' },

    ];

    const getAnimationClasses = (name) => {
        if (['react', 'redux'].includes(name)) return 'skill-icon';
        else if (name === 'mysql') return 'mysql';
        else return ''
    }

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
                                        <i className={`ci ci-${el.name} ci-5x ${getAnimationClasses(el.name)}`}></i>
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
