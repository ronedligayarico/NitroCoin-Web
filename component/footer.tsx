import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
 
    return (
        <>
        {/* <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script> */}

            <footer>

                <div className="rounded-social-buttons gap-4 flex flex-row justify-center my-10">
                <SocialIcon className="saturate-200" url="https://facebook.com" />
                <SocialIcon className="saturate-200" url="https://twitter.com" />
                <SocialIcon className="saturate-200" url="https://instagram.com" />
                <SocialIcon className="saturate-200" url="https://google.com" />
                <SocialIcon className="saturate-200" url="https://telegram.com" />
                </div>

                <hr />
                <div className="text-center p-8">
                    Copyright © 2022 Nitro Coin <br/>
                    All rights reserved  |  Privacy
                </div>
            </footer>
        </>
    )
}

export default Footer;