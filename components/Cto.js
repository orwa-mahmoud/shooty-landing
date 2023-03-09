import React from 'react'

function cto() {
  return (
    <>
        <section id="cto" className="cto">
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <h1>
                            <strike>Start 3 month trial for free today</strike>
                        </h1>
                        <h2>We &apos;re here, book a call with our customer success manager.</h2>
                        <br/>
                        <a href={"#signUpModal"} data-bs-toggle="modal" className="btn-get-started">
                            <span>Signup for free</span>
                        </a>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 text-xl-end mt-5 mt-xl-0">
                        <p><i className="bi bi-check2-circle"></i>&nbsp;&nbsp;End-to-end workflow solution</p>
                        <p><i className="bi bi-check2-circle"></i>&nbsp;&nbsp;End-to-end workflow solution</p>
                        <p><i className="bi bi-check2-circle"></i>&nbsp;&nbsp;End-to-end workflow solution</p>
                        <p><i className="bi bi-check2-circle"></i>&nbsp;&nbsp;End-to-end workflow solution</p>
                        <p><i className="bi bi-check2-circle"></i>&nbsp;&nbsp;End-to-end workflow solution</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default cto