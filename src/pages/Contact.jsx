import React from 'react'
import { BsFillEnvelopeFill, BsChatDots, BsPeople, BsQuestionCircle, BsTelephone } from 'react-icons/bs'
import Cards from '../js/component/Cards.jsx'

const Contact = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="offset-2 col-8 text-center mt-5">
                    <BsFillEnvelopeFill className='bg-primary text-light display-5 p-2 rounded-2' />
                    <h2><b>Get in touch</b></h2>
                    <p>We'd love to hear from you</p>
                </div>
            </div>

            <div className="row">
                <div className="offset-3 col-6 d-flex flex-column mb-5">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingName" placeholder="name@example.com" />
                        <label htmlFor="floatingName">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="E-mail" />
                        <label htmlFor="floatingEmail">E-mail address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPhone" placeholder="Phone" />
                        <label htmlFor="floatingPhone">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ "height": " 200px" }}></textarea>
                        <label htmlFor="floatingTextarea">Message</label>
                    </div>
                    <button className='btn btn-primary p-3'>Submit</button>
                </div>
            </div>

            <div className="row">
                <div className=" col-3 my-5">
                    <Cards icono={<BsChatDots className='bg-primary text-light display-5 p-2 rounded-2' />} titulo={'Chat with us'} parrafo={'Chat live with one of our support specialists.'} />
                </div>
                <div className="col-3 my-5">
                    <Cards icono={<BsPeople className='bg-primary text-light display-5 p-2 rounded-2' />} titulo={'Ask the community'} parrafo={'Explore our community forums and communicate with other users.'} />
                </div>
                <div className="col-3 my-5">
                    <Cards icono={<BsQuestionCircle className='bg-primary text-light display-5 p-2 rounded-2' />} titulo={'Support center'} parrafo={"Browse FAQ's and support articles to find solutions."} />
                </div>
                <div className="col-3 my-5">
                    <Cards icono={<BsTelephone className='bg-primary text-light display-5 p-2 rounded-2' />} titulo={'Call us'} parrafo={'Call us during normal business hours at (555) 892-9403.'} />
                </div>
            </div>
        </div>
    )
}

export default Contact