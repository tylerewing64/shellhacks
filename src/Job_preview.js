import React from 'react'

export const arrayOfJobs = [
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
    },
    {
        "id": "6g7h8i9j",
        "title": "DevOps Engineer",
        "company": "Cloud Systems",
        "location": "Seattle, WA",
        "type": "Full-time",
        "description": "DevOps Engineer needed to manage CI/CD pipelines and AWS infrastructure. Must have experience with Docker, Kubernetes, and Jenkins.",
        "posted_date": "2024-09-27",
        "salary": "$120,000 - $145,000",
        "url": "https://example.com/jobs/6g7h8i9j"
    },
    {
        "id": "7h8i9j0k",
        "title": "Data Engineer",
        "company": "Big Data Co.",
        "location": "Boston, MA",
        "type": "Full-time",
        "description": "We are looking for a Data Engineer experienced in building ETL pipelines and working with large datasets. Proficiency in Python and SQL is required.",
        "posted_date": "2024-09-23",
        "salary": "$130,000 - $150,000",
        "url": "https://example.com/jobs/7h8i9j0k"
    },
    {
        "id": "8i9j0k1l",
        "title": "Mobile App Developer",
        "company": "AppDev LLC",
        "location": "Los Angeles, CA",
        "type": "Full-time",
        "description": "Experienced Mobile App Developer needed to create iOS and Android applications. Expertise in React Native and Flutter is preferred.",
        "posted_date": "2024-09-24",
        "salary": "$100,000 - $120,000",
        "url": "https://example.com/jobs/8i9j0k1l"
    },
    {
        "id": "9j0k1l2m",
        "title": "Security Engineer",
        "company": "SecureNet",
        "location": "Washington, DC",
        "type": "Full-time",
        "description": "We are hiring a Security Engineer to help maintain and improve our company's security posture. Must have experience in network security and incident response.",
        "posted_date": "2024-09-21",
        "salary": "$140,000 - $160,000",
        "url": "https://example.com/jobs/9j0k1l2m"
    },
    {
        "id": "0k1l2m3n",
        "title": "Frontend Developer",
        "company": "Creative Web Co.",
        "location": "Portland, OR",
        "type": "Full-time",
        "description": "Looking for a Frontend Developer with experience in HTML, CSS, JavaScript, and modern frontend frameworks such as Vue.js or React.",
        "posted_date": "2024-09-19",
        "salary": "$90,000 - $110,000",
        "url": "https://example.com/jobs/0k1l2m3n"
    },
    {
        "id": "1l2m3n4o",
        "title": "Machine Learning Engineer",
        "company": "AI Innovations",
        "location": "Remote",
        "type": "Contract",
        "description": "Seeking a Machine Learning Engineer to work on cutting-edge AI projects. Must be proficient in TensorFlow, PyTorch, and deep learning techniques.",
        "posted_date": "2024-09-18",
        "salary": "$140,000 - $160,000",
        "url": "https://example.com/jobs/1l2m3n4o"
    },
    {
        "id": "2m3n4o5p",
        "title": "Systems Engineer",
        "company": "TechOps",
        "location": "Houston, TX",
        "type": "Full-time",
        "description": "We are looking for a Systems Engineer to manage our IT infrastructure and ensure system stability. Knowledge of Linux and Windows environments is a must.",
        "posted_date": "2024-09-17",
        "salary": "$105,000 - $125,000",
        "url": "https://example.com/jobs/2m3n4o5p"
    },
    {
        "id": "3n4o5p6q",
        "title": "Database Administrator",
        "company": "DataWorks",
        "location": "Miami, FL",
        "type": "Full-time",
        "description": "We need a Database Administrator to manage our SQL Server and NoSQL databases. Experience with database performance tuning and security is required.",
        "posted_date": "2024-09-14",
        "salary": "$95,000 - $115,000",
        "url": "https://example.com/jobs/3n4o5p6q"
    },
    {
        "id": "4o5p6q7r",
        "title": "QA Automation Engineer",
        "company": "Quality First",
        "location": "Denver, CO",
        "type": "Full-time",
        "description": "QA Automation Engineer needed to build automated testing frameworks using Selenium, Cypress, or similar tools.",
        "posted_date": "2024-09-16",
        "salary": "$90,000 - $110,000",
        "url": "https://example.com/jobs/4o5p6q7r"
    },
    {
        "id": "5p6q7r8s",
        "title": "Cloud Architect",
        "company": "CloudMasters",
        "location": "San Diego, CA",
        "type": "Full-time",
        "description": "Seeking a Cloud Architect to design and implement cloud solutions on AWS and Azure platforms. Expertise in cloud infrastructure is required.",
        "posted_date": "2024-09-13",
        "salary": "$150,000 - $170,000",
        "url": "https://example.com/jobs/5p6q7r8s"
    }
]
function Job_preview() {
    
    
      
  return( 
  <>
    <h3 className = "padding-10px">Recent Jobs</h3>
    <div className = ' flex-across space-around '>
        
        <div className='full-width '>
            {arrayOfJobs.slice(0,3).map(job =>( 
                <div className='padding-10px box-shadow home-page-jobs cursor-pointer'>
                    <h4>{job.company}</h4>
                    <span>{job.title}</span>
                </div>
            ))}
        </div>
        <div className='full-width '>
        {arrayOfJobs.slice(3,6).map(job =>( 
                <div className='padding-10px box-shadow home-page-jobs cursor-pointer'>
                    <h4>{job.company}</h4>
                    <span>{job.title}</span>
                </div>
            ))}

        </div>
        <div className='full-width '>
        {arrayOfJobs.slice(6,9).map(job =>( 
                <div className='padding-10px box-shadow home-page-jobs cursor-pointer'>
                    <h4>{job.company}</h4>
                    <span>{job.title}</span>
                </div>
            ))}

        </div>
    </div>
    </>
  )
}

export default Job_preview