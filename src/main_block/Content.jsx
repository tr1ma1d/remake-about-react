import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './css/main-style.css';
import imgsrc from './images/2.jpg';
import signature from './images/signature.png';
import signature2 from './images/Component 1.png';

const Content = function () {

    const [widgetVisible, setWidgetVisible] = useState(false);
    
    function openWidget() {
        
        setWidgetVisible(prevVisible => !prevVisible);
       
    };
    function buttonStyle(widgetVisible) {
        return {
            borderRadius: widgetVisible ? '20px 20px 0px 0px' : '20px'
        };
    };
    
    return (
        <main className='content'>
            <div className="about-container">
                <div className='container_first'>
                    <div className="about-container_img " >
                        <img src={imgsrc} alt="me" className="about_img" id="widget-btn" onClick = {openWidget} style = {buttonStyle(widgetVisible)}/>
                    </div>
                    <div className="about-containter_img_briefly" style = {{display: widgetVisible ? 'grid' : 'none'}} id="widget" onClick={openWidget}>
                        <div className="about-container_img__text">
                            <h4 className="about-container_img_briefly briefly_title">
                                Profile
                            </h4>
                            <ul className="about-container_img_briefly briefly_text">
                                <li>
                                    fullstack
                                </li>
                                <li>
                                    student
                                </li>
                                <li>
                                    design
                                </li>
                                <li>
                                    18-19 y.o.
                                </li>
                            </ul>
                            <img src={signature} alt="signature"
                                className="about-container_img_briefly signature" />
                        </div>
                        <div className="about-container_decoration">
                            <h4>
                                Nikita <span>Musatov</span>
                            </h4>
                        </div>


                    </div>
                </div>

                <div className="about-container_content">
                    <h5 className="about-container_content__title">
                        Hello
                    </h5>
                    <div className="content-container_text">
                        <p className="content-container__text">
                            Hello! My name is Nikita and i wanna be software engineer.
                        </p>
                        <p className="content-container__text">
                            I learn English, JS, Python, C#/Java if i have free time.
                        </p>
                        <p className="content-container__text">
                            Actually I`m lazy.
                        </p>
                    </div>
                    <div className="content_quote_container">
                        <img src={signature2} alt="quote" className="content__quote" />
                    </div>

                </div>
            </div>

            <div className="project-container">
                <h2 className="project-container__title">
                    ME? WORK? PROJECT?
                </h2>
                <div className="project-container_content">
                    <p className="project-container__text">
                        However, my projects are hosted on github or on this site as CaleTime ;p
                    </p>
                    <Link to="#" className="project-container__link">View</Link>
                </div>
            </div>
        </main>
    );
}


export default Content;