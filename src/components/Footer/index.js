import React from 'react';
import SocialHandles from '../../widgets/social_handles';

const Footer = () => {
    return (
        <footer>
            

            {/* <!-- SOCIAL MEDIA HANDLES  --> */}
            <div className="footer_top">
                <SocialHandles/>
            </div>

  

            {/* <!-- COPYRIGHT INFO  --> */}
            <div className="footer_bottom pt-5 pb-5">
                <div className="container">
                <div className="row text-center text-white">
                    <div className="col-12">
                    <div className="footer-bottom__copyright">
                        ✌ | &copy; Copyright 2021 <br/><br/>

                        Made with 💗 by <a href="/" >codepraycode</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;