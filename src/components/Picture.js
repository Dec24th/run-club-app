import React from 'react';
import Photo from './Photo' 

function Picture(props) {
    return (
        <>
            <div className='photo-container'>
                <Photo />
                <p>{props.title}</p>
            </div>
        </>

    )
}

export default Picture