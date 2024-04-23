import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer-style.css';
import teleImage from './images/telegram.svg';
import vkImage from './images/vk.svg';
import disImage from './images/discord.svg';
const Footer = function () {
    return (
        <footer className="bot">
            <div className="container_title">
                <h2 className="container__title">
                    SocialLink
                </h2>
            </div>
            <div className="container_social">
                <div className="bot-social_container">
                    <img src={teleImage} alt="Telegram" className="bot-social-link__image" />
                    <Link to="#" className="bot-social-link">Telegram</Link>
                </div>
                <div className="bot-social_container">
                    <img src={vkImage} alt="VK" className="bot-social-link__image"/>
                    <Link to="#" className="bot-social-link">VK</Link>


                </div>
                <div className="bot-social_container">
                    <img src={disImage} alt="Discrod" className="bot-social-link__image" />
                    <Link to="#" className="bot-social-link">Discrod</Link>
                </div>



            </div>
        </footer>

    );
}

export default Footer;