import React from 'react';
import './mobile-full-image.styles.css';

const MobileImageFull = ({img}) => {
    return (
        <img alt="item" className="bannerMobile" src={img} />
    )
}

export default MobileImageFull;