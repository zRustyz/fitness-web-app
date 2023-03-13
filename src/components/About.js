import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

function About(props) {

    return (
    <div className="container">
      <Header />
      <header className="container-fluid bg-dark text-white pt-2 pb-2">
        <h1 className="m-3">About Us</h1>
      </header>
      <main>
        <p className='m-3'>This website is for fitness style that provides some recommended exercises for your personal goals.</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;