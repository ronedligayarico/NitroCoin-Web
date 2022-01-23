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