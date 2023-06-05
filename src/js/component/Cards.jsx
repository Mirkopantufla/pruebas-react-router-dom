import React from 'react'


const Cards = ({ icono, titulo, parrafo }) => {
    return (
        <>
            {icono}
            <p className='fs-5'><b>{titulo}</b></p>
            <p>{parrafo}</p>
        </>
    )
}

export default Cards