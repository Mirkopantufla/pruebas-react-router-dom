import React from 'react'
import { BsFolder, BsBuildings, BsChatSquareDots, BsChatSquareHeart } from "react-icons/bs"
import Cards from '../js/component/Cards.jsx'

const Main = () => {
    return (
        <div className='container-fluid'>

            <div className="row bg-dark text-light py-5">
                <div className="offset-1 col-5 text-start align-self-center">
                    <h1>A Bootstrap 5 template for modern businesses</h1>
                    <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit!</p>
                    <button className='btn btn-primary me-3'>Get Started</button>
                    <button className='btn btn-outline-light'>Learn More</button>
                </div>
                <div className='col-5 d-flex justifi-content-start py-5'>
                    <img className='rounded-3' src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
                </div>
            </div>

            <div className="row my-5">
                <div className="offset-1 col-3 mt-4 me-4">
                    <h2><b>A better way to start building.</b></h2>
                </div>
                <div className="col-3 mt-4 me-4">
                    <Cards icono={<BsFolder className='bg-primary text-light display-5 p-2 rounded-2' />} parrafo={'Donec magna urna, tincidunt eu dignissim vel, accumsan ut mauris.'} titulo={'Carpetas'} />
                    <Cards icono={<BsBuildings className='bg-primary text-light display-5 p-2 rounded-2' />} parrafo={'In vel lorem ante. Pellentesque habitant morbi tristique senectus et netus'} titulo={'Edificiosxd'} />
                </div>
                <div className="col-3 mt-4">
                    <Cards icono={<BsChatSquareDots className='bg-primary text-light display-5 p-2 rounded-2' />} parrafo={'In vel lorem ante. Pellentesque habitant morbi tristique senectus et netus'} titulo={'Puntos'} />
                    <Cards icono={<BsChatSquareHeart className='bg-primary text-light display-5 p-2 rounded-2' />} parrafo={'In vel lorem ante. Pellentesque habitant morbi tristique senectus et netus'} titulo={'Corazon'} />
                </div>
            </div>
        </div>
    )
}

export default Main;