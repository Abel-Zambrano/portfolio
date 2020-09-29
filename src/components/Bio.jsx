import React from 'react';

function Bio() {
    return(
        <div className='bio'>
            <div className='image-content'>
                <img src="https://live.staticflickr.com/65535/50373707011_c89ca24e84.jpg" alt="Abel Zambrano"/>
            </div>
            <div className='bio-content'>
                <h1>ABEL ZAMBRANO | FULL STACK WEB DEVELOPER</h1>
                <p>Graduated from California State University, East Bay with a B.S. in Business - <strong>Information Technology Management.</strong></p>
                <p>Experience in building web applications consisting of responsive and dynamic design. I enjoy turning ideas into functioning applications. Love taking on challenging tasks and learning new technologies.</p>
            </div>
        </div>
    );
}

export default Bio;