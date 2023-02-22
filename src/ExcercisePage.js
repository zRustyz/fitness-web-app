import React from 'react';



export function RenderHeader(props) {
  return(
  <header class="container-fluid bg-dark text-white pt-4 pb-5">
    <a href="www.google.com" class="text-decoration-none text-white h4 pt-2" >Home</a>
    <h1 class="pt-5">The Bench Press</h1>
  </header>
  )
}

export function RenderContent(props) {
  return(
  <main>
    <div class="container">
      <div class="card my-3">
        <div class="card-body">
          <img src="https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-bench-press-benefits-1024x576.jpg"
          alt="the bench press being performed" class="img-fluid rounded mb-3"/>
          <h2> Instructions:</h2>
          <p>
            To perform the bench press, grip the bar with your hands, use the ring as a reference for
            where your fingers should be. Drive your back firmly into the bench, then remove the bar from
            the rack. Once holding the bar in a stable position, lower it all the way to your body so it
            rests slighty lower than where your pec muscles insertions begins. Then push the bar off your
            chest until your elbows lock out to perform a rep of the bench press. For strength training
            use heavy weights and perform sets of 1-3 reps. To build muscle volume, use weights that allow
            you to perform 8-12 reps.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h2>Tips & Suggestions</h2>
          <ul class="my-3">
            <li>Warm-up properly before lifting heavy weights.</li>
            <li>Maintain a proper grip width for each hand.</li>
            <li>Keep your shoulder blades squeezed together.</li>
            <li>Lower the bar to your mid-chest, not your neck or stomach.</li>
            <li>Keep your elbows tucked in close to your body.</li>
            <li>Push the bar straight up, avoiding arching your back.</li>
            <li>Breathe out as you lift and inhale as you lower the bar.</li>
            <li>Avoid locking out your elbows at the top of the lift.</li>
            <li>Gradually increase weight to avoid injury.</li>
            <li>Focus on form and proper technique over weightlifting.</li>
          </ul>
          <p>Leave a suggestion here!</p>
          <input placeholder="Type here"/>
          <button id="submit"
          >Submit</button>
        </div>
      </div>
    </div>
  </main>
  )
}

export function Test(props) {
  return(
    <p>hello world!</p>
  )
}

export function Temp(props) {
  <header class="container-fluid bg-dark text-white pt-4 pb-5">
    <a href="index.html" class="text-decoration-none text-white h4 pt-2" >Home</a>
    <h1 class="pt-5">The Bench Press</h1>
  </header>
}