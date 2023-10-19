import React from 'react'

export default function Skills () {
  const skills = ["JavaScript", "React", "Nodejs", "Java", "C++"]

  return (
    <section id='skills'>
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="skills">
        {skills.map((skill) => (
            <div className="skill-layout">
              <h2>{skill}</h2>
            </div>
        )
        )}
      </div>
    </section>
  )
}