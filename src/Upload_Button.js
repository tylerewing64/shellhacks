import React, { useRef } from 'react';

function Upload_Button() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();  // Trigger the hidden file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      console.log('File selected:', file); 
      // Here, you can handle the file upload logic, such as sending it to a server.
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
