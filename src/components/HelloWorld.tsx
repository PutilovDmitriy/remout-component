import React from 'react';

const HelloWorld = ({text}) => {
    return (
        <div>
            <h1 style={{ zIndex: 1000, fontSize: 30, color: 'red' }}>{text}</h1>
        </div>
    );
};

export default HelloWorld;