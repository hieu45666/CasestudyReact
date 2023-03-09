import React from 'react'
export default function Slider() {
    return (
        <div>
            <div style={{ width: "100vw", height: "600px", backgroundColor: "#F4F4F4" }} id="carouselId" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to={0} className="active" />
                    <li data-target="#carouselId" data-slide-to={1} />
                    <li data-target="#carouselId" data-slide-to={2} />
                </ol>
                <div style={{ height: "600px" }} className="carousel-inner d-flex align-items-center " role="listbox">
                    <div className="carousel-item active">
                        <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/digital-meter.jpg" alt='true'/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='text-primary mt-2'>Hurry Up!</h1>
                            <h3 className='text-primary'>Hurry Up! Daily Deal Of The Day</h3>
                            <p className='text-secondary'>Description</p>
                            <p className='text-secondary'>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit.Donec id tellus lacinia an, tincidunt risus ac, consequat velit</p>
                            <button className='btn btn-primary'>By now!</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block">
                        <h1 className='text-primary mt-2'>Medical</h1>
                            <h1 className='text-primary mt-2'>First Aid Kit</h1>
                            <h1 className='text-primary mt-2'>Bag</h1>
                            <p className='text-secondary'>Pellentesque posuere orci loborts lacinia an, tincidunt risus ac, consequat velit</p>

                            <button className='btn btn-primary'>By now!</button>
                        </div>
                        <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/product-1-1000x1000.jpg" alt="First slide" />

                    </div>
                    <div className="carousel-item">
                        <img src="https://medik.wpenginepowered.com/wp-content/uploads/2019/07/digital-meter.jpg" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='text-primary mt-2'>Medical</h1>
                            <h1 className='text-primary mt-2'>First Aid Kit</h1>
                            <h1 className='text-primary mt-2'>Bag</h1>
                            <p className='text-secondary'>Pellentesque posuere orci loborts lacinia an, tincidunt risus ac, consequat velit</p>
                            <button className='btn btn-primary'>By now!</button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}
