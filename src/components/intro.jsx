import React from "react";
import { FaCartPlus, FaChartLine } from "react-icons/fa";

export default function Intro() {
   return (
      <div className="intro">
         <div className="container-fluid">
            <div className="row">
               <div className=" kk d-flex text-uppercase justify-content-center align-items-center col-lg-6 col-12 col-md-12">
                  <div className="intro-text text-center  py-3">
                     <h1 className="fw-bold">
                        YUKAN, Fuck'em YOU <br /> CAN DO IT
                     </h1>
                     <span>Inspiring, Building and creating...</span>
                     <div className="btn-con mt-4">
                        <a
                           href="#"
                           className="btn btn-sm m-1 text-light rounded-pill px-5"
                        >
                           <FaChartLine /> Chart
                        </a>
                        <a
                           href="#"
                           className="btn btn-sm m-1 text-yukan fw-bold rounded-pill px-5 mx-2"
                        >
                           Buy {" "}
                           <FaCartPlus />
                        </a>
                     </div>
                  </div>
               </div>
               <div className=" kk d-lg-flex justify-content-center align-items-center col-lg-6 col-12 col-md-12">
                  <div className="intro-img">
                     <img src="logo.png" alt="Yukan" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
