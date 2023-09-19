import React from 'react'
import Title from '../Layouts/Title';
import ProjectCard from './ProjectCard';
import PortfolioImg from '../../assets/images/projects/PortfolioImg.png';
import NetflixImg from '../../assets/images/projects/NetflixImg.png';
import GreetingImg from '../../assets/images/projects/GreetingImg.png';
import ToDoListImg from '../../assets/images/projects/ToDoListImg.png';
const Projects = () => {
  return (
    <section id='projects' className='w-full py-16   border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-14'>
          <ProjectCard 
            title="Portfolio Website"
            des="A curated showcase of my creative journey. Explore a collection of my work, spanning design, development, and more. Discover the passion, innovation, and dedication that drive my projects."
            src={PortfolioImg}
            GithubLink="https://github.com/ShuaibAlam12/ShuaibPortfolio"
            WebsiteLink="https://shuaib-portfolio-shuaibalam12.vercel.app/"
          
          />
          <ProjectCard 
            title="ToDO List App"
            des="Explore the power of this dynamic web application, meticulously designed and developed to help you conquer tasks efficiently.Experience the seamless synergy of modern technology and user-friendly design."
            src={ToDoListImg}
            GithubLink="https://github.com/ShuaibAlam12/ToDoList-app-Using-MaterialUI"
            WebsiteLink="https://8qflqf-3000.csb.app/"
          />
          <ProjectCard 
          title="Netflix App"
          des="Check out my Netflix Web Series App featuring the top 6 shows, complete with a 'Watch Now' button for instant viewing – all powered by React!"
          src={NetflixImg} 
          GithubLink="https://github.com/ShuaibAlam12/React.js-Netflix-App"
          WebsiteLink="https://4wx6vl-3000.csb.app/"
          />
       
          <ProjectCard 
            title="Greeting app"
            des="Experience my Time-Based Greeting App! It offers tailored greetings that change with the time of day, ensuring your messages are always perfectly timed and heartwarming."
            src={GreetingImg}
            GithubLink="https://github.com/ShuaibAlam12/React.js-Greeting-App"
            WebsiteLink="https://qwjycg-3000.csb.app/"
          />
         </div>


    </section>
  )
}

export default Projects;