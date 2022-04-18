import React from 'react';
import me from '../../images/me/me1.png'
import './About.css'

const About = () => {
    return (
        <div className='mt-3 container'>

            <h2 className='text-center'>About Me</h2>

            <div className='row container'>
                <div className='col-lg-8 col-md-6 col-12 mt-5'>
                    <p>Hi! I am Hasif. Right now I am learning web development with the help of programming hero team. Which is lead by Jhankar Mahbub. I already learn so many thing from this course. I already knew Html, css and some of css framework like bootstrap and tailwind. I also have some basic knowledge about JavaScript. Right know I am learning React js which a JavaScript library. Right know I am only focusing in this course. My target is to complete all the task step by step and finished the course perfectly. Wish me best luck!</p>
                </div>

                <div className='col-lg-4 col-md-6 col-12'>
                    <img className='about-img' src={me} alt="" />
                </div>


            </div>


        </div>
    );
};

export default About;