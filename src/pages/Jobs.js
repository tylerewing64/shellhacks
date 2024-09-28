import React, { useState } from 'react';
import { arrayOfJobs } from '../Job_preview'; // Assuming this is the correct path for your job array
import '../Jobs.css'; // Import the CSS file
import Topbar from '../Topbar';

function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null); // State for selected job

  const handleJobClick = (job) => {
    setSelectedJob(job); // Set the selected job when clicked
  };

  return (
    <Topbar></Topbar>,
    <div className="jobs-container">
      {/* Left Side: Scrollable Job List */}
      <div className="jobs-list list-width">
        <h2>Available Jobs</h2>
        <ul>
          {arrayOfJobs.map((job) => (
            <li key={job.id} onClick={() => handleJobClick(job)}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <a href={job.url} target="_blank" rel="noopener noreferrer">View Job</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Display Selected Job Details */}
      <div className="job-details">
        {selectedJob ? (
          <>
            <h2>{selectedJob.title}</h2>
            <p><strong>Company:</strong> {selectedJob.company}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Type:</strong> {selectedJob.type}</p>
            <p><strong>Salary:</strong> {selectedJob.salary}</p>
            <p><strong>Description:</strong> {selectedJob.description}</p>
            <p><strong>Posted Date:</strong> {selectedJob.posted_date}</p>
            <a href={selectedJob.url} target="_blank" rel="noopener noreferrer">Apply Here</a>
          </>
        ) : (
          <p>Please select a job to view details.</p>
        )}
      </div>
    </div>
  );
}

export default Jobs;
