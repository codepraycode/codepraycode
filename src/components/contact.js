import React from 'react';

import Section from '../widgets/Section';

const Contact = () => {
    return (
        <Section id="contact" className="contact" header="Contact Me">
                <div className="row text-white">
                    <div className="col-12 col-lg-6 gradient shadow p-3">
                        <div className="cta-info w-100">
                            <h5 className="display-5 fw-bold">I'm reachable</h5>
                            <p className="lh-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias optio minima, tempore architecto sint ipsam dolore tempora facere laboriosam corrupti!
                            </p>
                            <h3 className="display-3--brief">
                                What will be the next step?
                            </h3>
                            <ul className="cta-info__list">
                                <li>We'll prepare the proposal.</li>
                                <li>we'll discuss it together.</li>
                                <li>let's start the discussion.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 bg-white shadow p-3">
                        <div className="form w-100 pb-2">
                            <h4 className="display-3--title mb-5">Send Me A Mail</h4>

                            <form className="row">
                                <div className="col-lg-6 col-md mb-3">
                                    <input type="text" placeholder="First Name" id="inputFirstName" className="shadow form-control form-control-lg"/>
                                </div>
                                <div className="col-lg-6 col-md mb-3">
                                    <input type="text" placeholder="Last Name" id="inputLastName" className="shadow form-control form-control-lg"/>
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <input type="email" placeholder="email address" id="inputEmail" className="shadow form-control form-control-lg"/>
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <textarea name="message" placeholder="message" id="message" rows="8" className="shadow form-control form-control-lg"/>
                                </div>

                                <div className="text-center d-grid mt-1">
                                    <button type="button" className="btn btn-primary rounded-pill pt-3 pb-3">
                                        submit
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </Section>
        
    );
};

export default Contact;