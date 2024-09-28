import React from 'react'
import Job_preview from '../Job_preview'
import Topbar from '../Topbar'
import { arrayOfJobs } from '../Job_preview'

function Jobs() {
    const jobItems = arrayOfJobs.map(job => <li>{job}</li>)
  return (
   <>
   <Topbar/>
   
   </>
   
  )
}

export default Jobs
