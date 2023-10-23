import React from 'react'

export default function About () {
  return (
    <section id='about'>
      <div className="title">
        <h1>Hi, I'm Vy</h1>
        <p>I'm a sophomore at DePauw University, double majoring in Computer Science and Mathematics</p>
      </div>
      <div className="contacts">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="#">Resume</a>
      </div>
      <div className="photo">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile picture" />
      </div>
    </section>
  )
}