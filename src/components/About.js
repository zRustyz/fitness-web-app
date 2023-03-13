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
        <p className='m-3'>Welcome to our fitness app! Our app is designed to help you get in shape by providing you with exercises based on specific body parts, 
        along with instructions on how to perform them correctly. Our app includes a comprehensive list of exercises that are grouped by body part, including chest,
        back, arms, legs, and core. Each exercise is accompanied by step-by-step instructions, along with pictures to guide you through proper form and technique.
        This ensures that you perform each exercise safely and effectively, which is essential for achieving the best possible results.</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;