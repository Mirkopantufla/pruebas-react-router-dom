import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const Pricing = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-12 text-center mt-5">
                    <h1><b>Pay as you grow</b></h1>
                    <p>With our no hassle pricing plans</p>
                </div>
            </div>
            <div className="row">
                <div className="offset-1 me-5 col-3 border border-secondary border-opacity-25 p-5 d-flex flex-column">
                    <p className='text-secondary'><b>FREE</b></p>
                    <span className='d-flex align-items-end'><h1 className='me-1 display-5 fw-bold'>$0</h1> <p>/mo</p></span>

                    <ul className='buenoLi'>
                        <li className='mb-3'>
                            <b>1 Users</b>
                        </li>
                        <li className='mb-3'>
                            5GB storage
                        </li>
                        <li className='mb-3'>
                            Unlimited public projects
                        </li>
                        <li>
                            Community access
                        </li>
                    </ul>
                    <ul className='maloLi'>
                        <li className='mb-3'>
                            Unlimited private projects
                        </li>
                        <li className='mb-3'>
                            Dedicated support
                        </li>
                        <li className='mb-3'>
                            Free linked domain
                        </li>
                        <li className='mb-3'>
                            Monthly status reports
                        </li>
                    </ul>
                    <button className='btn btn-outline-primary'>Choose Plan</button>
                </div>
                <div className="col-3 me-5 border border-secondary border-opacity-25 p-5 d-flex flex-column">
                    <p className='text-secondary'><BsStarFill className='text-warning mb-1 me-1' /><b>Pro</b></p>
                    <span className='d-flex align-items-end'><h1 className='me-1 display-5 fw-bold'>$9</h1> <p>/mo</p></span>

                    <ul className='buenoLi'>
                        <li className='mb-3'>
                            <b>5 users</b>
                        </li>
                        <li className='mb-3'>
                            5GB storage
                        </li>
                        <li className='mb-3'>
                            Unlimited public projects
                        </li>
                        <li className='mb-3'>
                            Community access
                        </li>
                        <li className='mb-3'>
                            Unlimited private projects
                        </li>
                        <li className='mb-3'>
                            Dedicated support
                        </li>
                        <li>
                            Free linked domain
                        </li>
                    </ul>
                    <ul className='maloLi'>
                        <li className='mb-3'>
                            Monthly status reports
                        </li>
                    </ul>
                    <button className='btn btn-primary'>Choose Plan</button>
                </div>
                <div className="col-3 border border-secondary border-opacity-25 p-5 d-flex flex-column">
                    <p className='text-secondary'><b>ENTERPRISE</b></p>
                    <span className='d-flex align-items-end'><h1 className='me-1 display-5 fw-bold'>$49</h1> <p>/mo</p></span>

                    <ul className='buenoLi'>
                        <li className='mb-3'>
                            <b>5 users</b>
                        </li>
                        <li className='mb-3'>
                            5GB storage
                        </li>
                        <li className='mb-3'>
                            Unlimited public projects
                        </li>
                        <li className='mb-3'>
                            Community access
                        </li>
                        <li className='mb-3'>
                            Unlimited private projects
                        </li>
                        <li className='mb-3'>
                            Dedicated support
                        </li>
                        <li className='mb-3'>
                            <b>Unlimited</b> linked domains
                        </li>
                        <li className='mb-3'>
                            Monthly status reports
                        </li>
                    </ul>
                    <button className='btn btn-outline-primary'>Choose Plan</button>
                </div>
            </div>
        </div>
    )
}

export default Pricing