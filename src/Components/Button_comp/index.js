import React from 'react'
import './styles.css'

export default function ButtonComp({title, color, filterUpdate}) {
    return (
        <button className='btn' style={{backgroundColor: (color) ? 'rgba(8, 30, 52, 0.42)' : '#e1e1e1'}} onClick={filterUpdate}>{title}</button>
    )
}
