import React from 'react';

function Contact() {
    return (
        <div>
            <div className='contact-div'>
                <div>
                    <a href="https://www.linkedin.com/in/abel-zambrano/" target="_blank">
                    <img className='social-media' src="https://live.staticflickr.com/65535/50392527416_7bb05419f2_o.png" alt="linkedin"/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Abel-Zambrano">
                        <img className='social-media' src="https://live.staticflickr.com/65535/50392696762_edf7cc7366_o.png" alt="github"/>
                    </a>     
                </div>
            </div>
            <div>
                <h3 className='contact'>Phone: 510-619-4434</h3>
                <h3 className='contact'>Email: azambrano1417@gmail.com</h3>
            </div>
        </div>
    )
}

export default Contact;