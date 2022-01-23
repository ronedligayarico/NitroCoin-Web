import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
 
    return (
        <>
        {/* <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script> */}

            <footer>

                <div className="rounded-social-buttons gap-4 flex flex-row justify-center">
                <SocialIcon url="https://facebook.com" />
                <SocialIcon url="https://twitter.com" />
                <SocialIcon url="https://instagram.com" />
                <SocialIcon url="https://google.com" />
                <SocialIcon url="https://telegram.com" />
                    {/* <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a className="social-button twitter" href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a className="social-button youtube" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a className="social-button instagram" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a> */}
                </div>


                <div className="text-center p-8">
                    Copyright © 2022 Nitro Coin <br/>
                    All rights reserved  |  Privacy
                </div>
            </footer>
        </>
    )
}

export default Footer;