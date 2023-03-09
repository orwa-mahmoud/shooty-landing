import React from 'react'
import Image from 'next/image'
function Testimonials() {
  return (
    <>
        <section id="testimonials" className="testimonials">

            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 data-aos="fade-up">Loved by the world&apos;s best teams</h1>
                        <p data-aos="fade-up">What they say about us</p>
                    </div>
                </div>
                <div className="swiffy-slider slider-item-show3 slider-nav-dark slider-nav-outside-expand slider-nav-autoplay">
                    <ul className="slider-container py-4">
                        <li>
                            <div className="card">
                                <div className="card-body">
                                    <h2>
                                    &quot;Really glad to have a call with Dani – super invaluable.
                                        She is full of energy and her ability to listen, and offer
                                        thoughtful advice was very helpful. Will definitely be booking.&quot;
                                    </h2>
                                    <div className="row mt-5">
                                        <div className="col-3">
                                            <Image   width={100} height={50} className="img-fluid custom-img" src="/assets/img/testimonials-1.jpg" alt="Person Name" style={{ position: "relative" }}/>
                                        </div>
                                        <div className="col-8">
                                            <h3>Max</h3>
                                            <h4>Photographer,</h4>
                                            <h5>Gillette</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <div className="card-body">
                                    <h2>
                                    &quot;Really glad to have a call with Dani – super invaluable.
                                        She is full of energy and her ability to listen, and offer
                                        thoughtful advice was very helpful. Will definitely be booking.&quot;
                                    </h2>
                                    <div className="row mt-5">
                                        <div className="col-3">
                                            <Image fill className="img-fluid custom-img" src="/assets/img/testimonials-1.jpg" alt="Person Name"/>
                                        </div>
                                        <div className="col-8">
                                            <h3>Max</h3>
                                            <h4>Photographer,</h4>
                                            <h5>Gillette</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <div className="card-body">
                                    <h2>
                                    &quot;Really glad to have a call with Dani – super invaluable.
                                        She is full of energy and her ability to listen, and offer
                                        thoughtful advice was very helpful. Will definitely be booking.&quot;
                                    </h2>
                                    <div className="row mt-5">
                                        <div className="col-3">
                                            <Image fill className="img-fluid custom-img" src="/assets/img/testimonials-1.jpg" alt="Person Name"/>
                                        </div>
                                        <div className="col-8">
                                            <h3>Max</h3>
                                            <h4>Photographer,</h4>
                                            <h5>Gillette</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <div className="card-body">
                                    <h2>
                                    &quot;Really glad to have a call with Dani – super invaluable.
                                        She is full of energy and her ability to listen, and offer
                                        thoughtful advice was very helpful. Will definitely be booking.&quot;
                                    </h2>
                                    <div className="row mt-5">
                                        <div className="col-3">
                                            <Image fill className="img-fluid custom-img" src="/assets/img/testimonials-1.jpg" alt="Person Name"/>
                                        </div>
                                        <div className="col-8">
                                            <h3>Max</h3>
                                            <h4>Photographer,</h4>
                                            <h5>Gillette</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="card">
                                <div className="card-body">
                                    <h2>
                                    &quot;Really glad to have a call with Dani – super invaluable.
                                        She is full of energy and her ability to listen, and offer
                                        thoughtful advice was very helpful. Will definitely be booking.&quot;
                                    </h2>
                                    <div className="row mt-5">
                                        <div className="col-3">
                                            <Image fill className="img-fluid custom-img" src="/assets/img/testimonials-1.jpg" alt="Person Name"/>
                                        </div>
                                        <div className="col-8">
                                            <h3>Max</h3>
                                            <h4>Photographer,</h4>
                                            <h5>Gillette</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button type="button" className="slider-nav" aria-label="Go left"></button>
                    <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>
                </div>
            </div>

        </section>
    </>
  )
}

export default Testimonials