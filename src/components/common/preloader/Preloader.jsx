import React from 'react';
import preLoader from "../../../assets/images/preloader.gif";

const Preloader = () => {
    return (
        <div>
            <img width='50' src={preLoader} />
        </div>
    );
};

export default Preloader;