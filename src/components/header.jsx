import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function Header() {
    const toggleMenu = () => {
        document.querySelector(".menu-link").classList.toggle("active-link")
    }
  return (
    <div className="header shadow-sm py-3">
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <div className="logo">
                        <img src="logo.png" alt="Yukan" className='img-fluid' width={100} height={100}/>
                    </div>
                </div>
                <div className="col">
                    <div className='menu-link d-lg-flex justify-content-evenly fw-bold'>
                        <a href="#" onClick={toggleMenu}>Home</a>
                        <a href="#about" onClick={toggleMenu}>About</a>
                        <a href="#tokenomics" onClick={toggleMenu}>Tokenomics</a>
                        <a href="#roadmap" onClick={toggleMenu}>Roadmap</a>
                        {/* <a href="#" onClick={toggleMenu}>Home</a> */}
                    </div>
                </div>
                <div className="col btn-con">
                    <div className=" d-flex justify-content-end">
                        <a href="#" className='btn btn-sm font-bold px-4 py-2 rounded-pill'> Buy Now</a>
                    </div>
                </div>
               <div className="col menu-bar">
               <div className="menu-bar text-right" onClick={toggleMenu}>
                    <i className='fw-bold fs-1'><FaBars /></i>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}
