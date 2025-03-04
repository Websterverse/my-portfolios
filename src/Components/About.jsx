
import React from 'react';
import '../Home.css';

const ABOUT = () => {
  return (
    <div
      name="about"
      className="about w-full  pt-24 min-h-screen text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full abcon">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            ABOUT
          </p>
        </div>
        <p className="text-xl mt-10">
        

Hi, I’m <b> Kartik Kumar</b>, a passionate and dedicated <b> final-year BCA student </b> from <b> Maharaja Surajmal Institute </b> , where I’ve maintained a CGPA of <b> 9.5 </b> and secured the top rank (#1) in GGSIPU during my 4th semester. As a <b> full-stack web developer </b> , I specialize in creating responsive and visually appealing web applications, with proficiency in technologies like <b> React.js, Node.js, MongoDB, TypeScript </b>, and <b>Tailwind CSS </b>.  
<br />
<br />

I thrive on challenges and take pride in building impactful projects. Some of my notable work includes: 
<br />
<br /> 

- <b>People Care Hospital Management System</b>: A comprehensive system for managing patient records, appointments, and staff information with analytics for seamless hospital operations.  <br /> <br />
- <b>E-Learner Application</b>: A MERN-based platform for online learning with OTP-secured login, course purchase, and video tutorials.  <br /> <br />
- <b>Medical AI Platform </b>: A system for AI-assisted cancer care planning and personalized treatment recommendations.  <br /> <br />


Apart from academics and projects. I’m the <b> President of the Software Development Cell (SDC) </b> and the <b> Chief Organizer for the SMART INDIA HACKATHON 2024</b> in my college. Leading teams and collaborating on real-world solutions is where I shine the most. I also have a keen interest in <b> data analysis </b> using tools like Python, NumPy, and Matplotlib.  

Driven by a constant desire to learn, grow, and innovate, I’m always looking for opportunities to contribute to meaningful projects and explore cutting-edge technologies.  

        </p>
        <br />
        {/* <p className="text-xl">
          Currently, I am pursuing a BCA from Maharaja Surajmal Institute (2022-2025). My skill set includes proficiency in frontend technologies like HTML, CSS, and JavaScript, as well as backend development with Node.js and Express.js. I am dedicated to writing clean, maintainable code and following best practices to ensure high-quality software. My goal is to build applications that provide excellent user experiences and meet the needs of users.
        </p> */}
      </div>
    </div>
  );
};

export default ABOUT;
