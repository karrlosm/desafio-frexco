import React from 'react';

import '../css/location.css'

const Location = ({children}) => {
    return ( 
        <div className='location'>
        {children}
        </div>
    );
}
 
export default Location;