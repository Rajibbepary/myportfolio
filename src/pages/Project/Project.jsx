import React from 'react';
import { FaGithub } from 'react-icons/fa';
import img1 from '../../assets/react-icon-256x228-97ltgbl1.png';
import img2 from '../../assets/react-router (1).png';
import img3 from '../../assets/Screenshot_116.png';
import img4 from '../../assets/firebase.png';
import img5 from '../../assets/logo-mongodb-png-mongo-db-shaped-sticker-650.png';
import project1 from '../../assets/Screenshot 2025-02-06 231841.png';
import project2 from '../../assets/Screenshot 2025-04-18 205634.jpg';
import project3 from '../../assets/Screenshot 2025-02-07 093919.png';

const projects = [
  {
    id: 1,
    title: 'Chill Gamer',
    description:
      "A detailed description of the project goes here. This is a gamer website. There are different types of games. Users have to login to use it. You can view different types of games. You can review the games. All your reviewed games will be shown.",
    liveLink: 'https://chill-game-6c5d7.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course2/b10-a10-client-side-Rajibbepary',
    imgSrc: project1,
  },
  {
    id: 2,
    title: 'Volunteer Managment',
    description:
      'A full-stack web application designed to streamline volunteer coordination and event management. Built with React.js for a dynamic user interface, Firebase for authentication and real-time features, Node.js and Express for the backend API, and MongoDB for efficient data storage. The platform allows organizations to post events, manage volunteers, and track participation seamlessly.',
    liveLink: 'https://volunter-managment.web.app/',
    githubLink: 'https://github.com/Rajibbepary/volunteer-managment-client',
    imgSrc: project2,
  },
  {
    id: 3,
    title: 'Medical Camp Managment',
    description:
      'You want to build a Medical Camp Management System where: Users can add Medical camps. Users can join Medical camps. Users can view the Medical camps they have added. Everyone can see who has posted volunteer camps',
    liveLink: 'https://medical-camp-43904.web.app/',
    githubLink: 'https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Rajibbepary',
    imgSrc: project3,
  },
];

const techStackIcons = [img1, img2, img3, img4, img5];

const Project = () => {
  return (
    <div className="min-h-screen text-white px-4 py-8 md:px-10 lg:px-20 bg-[#0f172a]">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <h2 className="pb-12 max-w-4xl mx-auto text-lg md:text-xl">
          These projects highlight my skills and experience through practical, real-world applications. Each one includes a brief description along with links to the code repositories and live demos.
        </h2>
      </div>

      <div id="project" className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row border-2 border-purple-600 rounded-lg overflow-hidden shadow-lg bg-[#1e293b] relative"
          >
            <img
              className="w-full lg:w-1/2 object-cover"
              src={project.imgSrc}
              alt={project.title}
            />

            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10">
              <FaGithub className="text-purple-700 w-6 h-6" />
            </div>

            <div className="flex-1 p-6 space-y-4">
              <h4 className="text-2xl font-bold">{project.title}</h4>
              <p className="text-sm md:text-base">{project.description}</p>

              <div>
                <p className="font-bold text-lg">Tech Used:</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {techStackIcons.map((icon, index) => (
                    <img
                      key={index}
                      className="w-10 h-10 border rounded-md shadow-md"
                      src={icon}
                      alt={`Tech Icon ${index}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-between items-center">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <button className="border border-purple-600 px-4 py-2 rounded-md hover:bg-purple-600 transition">
                    Live Preview
                  </button>
                </a>

                <img
                  className="w-8 h-8 animate-ping"
                  src="https://img.icons8.com/?size=100&id=IEHzNvjQmNPF&format=png&color=7950F2"
                  alt="Ping Icon"
                />

                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="border border-purple-600 px-4 py-2 rounded-md hover:bg-purple-600 transition">
                    View Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
