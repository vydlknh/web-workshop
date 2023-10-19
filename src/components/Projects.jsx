import React from 'react'

export default function Projects () {
  const projects = [
    {
      title: "React Reserve",
      subtitle: "MERN Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-1.gif",
      link: "https://reactbootcamp.com",
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-2.gif",
      link: "https://reedbarger.com",
    },
    {
      title: "DevChat",
      subtitle: "React and Firebase",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-3.gif",
      link: "https://jsbootcamp.com",
    }
  ]

  return (
    <section id='projects'>
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <a 
          href={project.link}
          key={project.image}
          className='project'>
            <div className="project-layout">
              <img src={project.image} alt="project thumbnail" />
              <h2>{project.subtitle}</h2>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </a>
        )
        )}
      </div>
    </section>
  )
}