import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            

            {/* <!-- SOCIAL MEDIA HANDLES  --> */}
            <div className="footer-sm" style={{backgroundColor: "#212121"}}>
                <div className="container">
                <div className="row py-4 text-center text-white">
                    <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                        connect with me on social media
                    </div>
                    <div className="col-lg-7 col-md-6">
                    <a href="https://facebook.com/codepraycode"><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/codepraycode"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/codepraycode"><i className="fab fa-github"></i></a>
                    <a href="https://linkdin.com/codepraycode"><i className="fab fa-linkedin"></i></a>
                    <a href="https://instagram.com/code_pray_code"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                </div>
            </div>

  

            {/* <!-- COPYRIGHT INFO  --> */}
            <div className="footer-bottom pt-5 pb-5">
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