import React, { Component } from 'react';

function Image(props) {
    return (
        <div>
            <img src={props.photo} alt='Random Photo' />
        </div>
    )
}

export default Image;