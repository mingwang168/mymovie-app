import React from 'react';

const Footer = () =>  {

    const d = new Date();
    const y = d.getFullYear()

    return (
        <footer className="text-center footer">
        <p>&copy; {y} Ming Wang and Anthony So</p>
        </footer>
    );
}

export default Footer;