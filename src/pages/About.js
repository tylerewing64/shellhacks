import React from 'react';
import '../about.css'; // Optional: For styling
import Topbar from '../Topbar';

const About = () => {
  return (
    <div className="about-container">
      <Topbar></Topbar>
      <h1>About Us</h1>
      <img src='https://media.istockphoto.com/id/1460172015/photo/businessmen-making-handshake-with-partner-greeting-dealing-merger-and-acquisition-business.jpg?s=612x612&w=0&k=20&c=IyQrIahedSW3WKsHSNsqtvX8dnzI1augnrtRrVeN3Dw='></img>
      <p>
        Welcome to our job matching platform, where we help you find the best job opportunities tailored specifically to your skills and experience. Our mission is to streamline your job search by providing you with personalized job recommendations that perfectly align with your resume.
      </p>
      <p>
        Using advanced algorithms, we analyze your resume, skills, and work experience to match you with job listings that are the best fit for your career goals. Whether you're looking for a new challenge or just starting your career, our platform helps connect you with top employers in your industry.
      </p>
      <p>
        We believe that finding the right job should be a seamless and efficient process, so we continuously improve our technology to bring you the most relevant and timely job opportunities. Let us do the heavy lifting and match you with jobs that are designed to help you succeed.
      </p>
      <h2>How It Works</h2>
      <ul>
        <li>Upload your resume to our platform.</li>
        <li>We analyze your qualifications and job preferences.</li>
        <li>You receive job recommendations tailored specifically for you.</li>
        <li>Apply to your favorite jobs directly through our site.</li>
      </ul>
      <p>
        Start your journey with us today and let us help you find your next great opportunity!
      </p>
    </div>
  );
}

export default About;
