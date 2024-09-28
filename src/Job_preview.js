import React from 'react'

function Job_preview() {
    const arrayOfJobs = [
        {
          "id": "1a2b3c4d",
          "title": "Software Engineer",
          "company": "Tech Solutions",
          "location": "San Francisco, CA",
          "type": "Full-time",
          "description": "We are looking for a Software Engineer to join our team working on scalable cloud applications. You will be responsible for writing clean, efficient code and collaborating with cross-functional teams.",
          "posted_date": "2024-09-28",
          "salary": "$120,000 - $140,000",
          "url": "https://example.com/jobs/1a2b3c4d"
        },
        {
          "id": "2b3c4d5e",
          "title": "Backend Software Engineer",
          "company": "Innovatech",
          "location": "Remote",
          "type": "Contract",
          "description": "Seeking an experienced Backend Software Engineer to work on our API systems. Expertise in Node.js and PostgreSQL is required. Experience with AWS is a plus.",
          "posted_date": "2024-09-25",
          "salary": "$100,000 - $130,000",
          "url": "https://example.com/jobs/2b3c4d5e"
        },
        {
          "id": "3c4d5e6f",
          "title": "Full Stack Software Engineer",
          "company": "Web Innovators",
          "location": "New York, NY",
          "type": "Full-time",
          "description": "Join our team as a Full Stack Software Engineer working with React and Node.js to develop high-performance web applications. Experience in building RESTful APIs and modern frontend frameworks required.",
          "posted_date": "2024-09-20",
          "salary": "$110,000 - $130,000",
          "url": "https://example.com/jobs/3c4d5e6f"
        },
        {
          "id": "4d5e6f7g",
          "title": "Junior Software Engineer",
          "company": "Future Tech",
          "location": "Austin, TX",
          "type": "Full-time",
          "description": "Looking for an entry-level Software Engineer to assist in the development of our core platform. Knowledge of JavaScript, Python, and version control systems is required.",
          "posted_date": "2024-09-18",
          "salary": "$80,000 - $95,000",
          "url": "https://example.com/jobs/4d5e6f7g"
        },
        {
          "id": "5e6f7g8h",
          "title": "Senior Software Engineer",
          "company": "Fintech Inc.",
          "location": "Chicago, IL",
          "type": "Full-time",
          "description": "We are seeking a Senior Software Engineer with 5+ years of experience to lead a team in developing robust financial software. Strong skills in Java, Python, and microservices architecture are a must.",
          "posted_date": "2024-09-15",
          "salary": "$150,000 - $180,000",
          "url": "https://example.com/jobs/5e6f7g8h"
        }
      ]
      
  return (
    <div className = ' flex-across space-around '>
        <div className=''>
            {arrayOfJobs.slice(0,3).map(job =>( 
                <div className='padding-10px box-shadow'>
                    <h4>{job.company}</h4>
                    <span>{job.title}</span>
                </div>
            ))}
        </div>
        <div className=''>
        {arrayOfJobs.slice(0,3).map(job =>( 
                <div className='padding-10px box-shadow'>
                    <h4>{job.company}</h4>
                    <span>{job.title}</span>
                </div>
            ))}

        </div>
        <div className=''>
        {arrayOfJobs.slice(0,3).map(job =>( 
                <div className='padding-10px box-shadow'>
                    <h4>{job.company}</h4>
                    <span>{job.title}</span>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Job_preview