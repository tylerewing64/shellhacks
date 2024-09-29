import React, {useState} from 'react'
import './App.css';
import Topbar from './Topbar';
import Upload_Button from './Upload_Button';
import Job_preview from './Job_preview';
import About from './pages/About'
import Jobs from './pages/Jobs'




function App() {
  const [indexOfcomp, setIndexOfComp] = useState(0);
  const [ai_gen_jobs, set_ai_gen_jobs] = useState();

  const arrayOfComponents = [
    <Upload_Button setIndexOfComp = {setIndexOfComp} set_ai_gen_jobs={set_ai_gen_jobs}/>, 
    <Job_preview/>,
    <About/>, 
    <Jobs ai_gen_jobs = {ai_gen_jobs}/>

  ]

  return (
    <>
      <Topbar setIndexOfComp={setIndexOfComp} />

        {
          arrayOfComponents[indexOfcomp]

        }
        {indexOfcomp === 0 ? arrayOfComponents[1]: null}
      
    </>
  
  );
}

export default App;
