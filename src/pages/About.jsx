import React from 'react'

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="offset-3 col-6 text-center my-5">
                    <h1><b>Our mission is to make building websites easier for everyone.</b></h1>
                    <p>Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
                    <button className='btn btn-primary'>Read our Story</button>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6">
                    <img className='rounded-3' src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <h4>Our Founding</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 d-flex flex-column justify-content-center">
                    <h4>Growth & beyond</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                </div>
                <div className="col-6">
                    <img className='rounded-3' src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About