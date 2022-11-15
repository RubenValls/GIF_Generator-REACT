import React from 'react';

const Footer = () => {
    
    const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Giphy-logo.svg/1280px-Giphy-logo.svg.png"
    const description = "Giphy logo"

    return (
        <div className='container-fluid bg-light'>
            <div className='row text-center p-2'>
                <div className='col text-black d-flex justify-content-end align-items-center'><h5>Powered by: </h5></div>
                <div className='col d-flex justify-content-left align-items-center'><img src = {url} alt = {description} width = '12%'></img></div>
            </div>
        </div>
    );
}

export default Footer;
