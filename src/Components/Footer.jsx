import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
       <div><button className="Submit" onClick={() => localStorage.clear()} >Log Out</button>
      <button className="Submit" onClick={() => localStorage.clear()} >Delete Acount</button></div>
    </div>
  )
}
