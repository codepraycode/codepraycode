import React from 'react';

// Contact is a modal

const Contact = ({ onClose }) => {

    return (
        
        <div className='contact_modal'>

            <div className='overlay'></div>

            <div className="content">
                <div className="header">
                    <h4>Send a message</h4>

                    <span className="close" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </span>
                </div>


                <div className="body">
                    <p className="text-muted">You can go ahead to send a message directly to me here</p>
                    {/* <p className="text-danger text-center p-0">Error message</p> */}
                    {/* <p className="text-success text-center p-0">
                        Message sent <i className="fas fa-check    "></i>
                    </p> */}
                    <form>
                        
                        <div className="input_group">
                            <input name="name" required={true} type="text" placeholder="I'll address you with this name"/>
                            <label htmlFor="name">What's your name</label>
                        </div>

                        <div className="input_group">
                            <input 
                                name="email" 
                                required={true} 
                                type="email" 
                                placeholder='I could respond to you via this mail address'
                            />

                            <label htmlFor="email">What's your email address</label>
                        </div>

                        <div className="input_group">
                            
                            <textarea 
                                name="message" 
                                required={true} 
                                placeholder='Enter your message'
                                rows={4}
                            />
                            <label htmlFor="message">Now your message</label>
                        </div>

                        <button className="btn-rounded">
                            Send
                            <span>
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                {/* <i className="fas fa-spinner"></i> */}
                                {/* <i className="fas fa-check"></i> */}
                                {/* <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> */}
                            </span>
                        </button>
                    </form>

                </div>
            </div>
        </div>
        
    );
};

export default Contact;