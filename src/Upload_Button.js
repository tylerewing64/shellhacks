import React, { useRef } from 'react';
import {uploadFile} from './services/fetchData'


function Upload_Button({setIndexOfComp, set_ai_gen_jobs}) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); 
    
  };

  const handleFileChange = async(event) => {
    const file = event.target.files[0];
    const formDataObj = new FormData();
    if (file && file.type === 'application/pdf') {
      formDataObj.append('file', file);
      const response = await uploadFile(formDataObj);
      const data = await response.json();
      
      set_ai_gen_jobs(data?.jobs);
      setIndexOfComp(3);
      
      
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  return (
    <div className='background-home'
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        
      }}>
      
      <input
        
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}  // Hide the actual file input
      />
      <button className="button cursor-pointer" onClick={handleButtonClick} >Upload PDF</button>
    </div>
  );
}

export default Upload_Button;
