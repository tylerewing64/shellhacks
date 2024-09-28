import React from 'react'

function Topbar() {
  return (
  <>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div className='top-container'>
        <div name = 'icon-nav' className='flex-across full-width top-icons'> 
            <span class="material-symbols-outlined cursor-pointer">person</span>
            <div className='top-icons-right'>
                <span class="material-symbols-outlined cursor-pointer">notifications</span>
                <span class="material-symbols-outlined cursor-pointer">settings</span>
            </div>
        </div>
        <div className='width-max'>
            <h2 className= "cursor-pointer">Home</h2>
            <h2 className= "cursor-pointer">Jobs</h2>
            <h2 className= "cursor-pointer">About</h2>
        </div>
    </div>
    </>
  )
}

export default Topbar