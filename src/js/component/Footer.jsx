import React from 'react'

const Footer = () => {
    return (
        <div className='container-fluid bg-dark text-light p-3'>
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    Copyright © Your Website 2023
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <a className='text-light me-2' href="#">Privacy ·</a>
                    <a className='text-light me-2' href="#">Terms ·</a>
                    <a className='text-light' href="#">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer