import React from 'react';
import SocialHandles from '../../widgets/social_handles';

const Footer = () => {
    return (
        <footer>
            

            {/* <!-- SOCIAL MEDIA HANDLES  --> */}
            <div className="footer_top">
                <div>
                    <p>Connect with me on</p>
                    <SocialHandles/>
                </div>

                <div className="right">
                    <p>send a mail to preciousolusola16@gmail.com, or </p>
                    <button className="btn-rounded sm">
                        Send a message here
                        <span>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
            </div>



  

            {/* <!-- COPYRIGHT INFO  --> */}
            <div className="footer_bottom">
                <span className="footer_bottom__copyright">
                    codepraycode &copy; copyright
                </span>

                <span>
                    Jesus loves you | God bless you | <i className="fa fa-heart text-danger" aria-hidden="true"></i>
                </span>
                
                <span>&nbsp;</span>
            </div>
        </footer>
    );
};

export default Footer;