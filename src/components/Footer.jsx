import React from 'react';

const year = new Date().getFullYear();

function Footer() {
return <footer className='copyright'>Copyright {year}</footer>
}

export default Footer;