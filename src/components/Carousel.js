// import React, { useState } from 'react'
import React from 'react'
export default function About() {
    return <div className='w-100'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="100">
      <img src="usman.png" className="d-block w-100" alt="No Image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Uthman made this app for you.</h5>
        <p className= 'carousel-p'>My name is Usman Khan I am a web designer.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://st2.depositphotos.com/1273995/12077/i/600/depositphotos_120773564-stock-photo-hands-holding-book.jpg" className="d-block w-100" alt="no image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Hello and welcome to the text converter app</h5>
        <p className= 'carousel-p'>Here you can change your text to lower case or upper case or even the ability to copy your text to the clipboard.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://image.freepik.com/premium-photo/love-read-books-concept-woman-holding-book-pages-heart_218381-5786.jpg" className="d-block w-100" alt="No Image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Always read books</h5>
        <p className= 'carousel-p'>Reading is good for human life if a person reads books for any problem then he will get correct answer to his problem.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
           </div> }
