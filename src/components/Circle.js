import React from 'react';
import './Circle.css'

const Circle = ({active, bgColor, circleId, clickHandler}) => {
    return (
        <div onClick={() => clickHandler(circleId)} className={'circle ' + bgColor + ' ' + active}>

        </div>
    )
}

export default Circle;