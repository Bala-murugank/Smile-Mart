import React from 'react'


export default function Footer() {
  return (
    <>
     
        <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)',height:100, marginTop:'auto'}}>
        <div style={{position:'relative', top:30, fontSize:'1.3rem'}}>
             
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/' >
         SMILE MART
        </a>
         </div>  
      </div>
    
     
    </>
  )
}
