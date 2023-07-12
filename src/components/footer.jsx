import React from "react";
import {
   FaEnvelope,
   FaInstagramSquare,
   FaTelegram,
   FaTelegramPlane,
   FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
   return (
      <div className="footer bg-black">
         <div className="f-head text-center p-2 text-light">
            <h1>
               <span className="text-yukan">Yukan</span> Socials
            </h1>
            <br />
            <small className="text-muted text-center fs-6">
               Our community is growing stronger with each day passing by.
               Ensure to follow us on our <br />
               social media platforms to stay updated on the{" "}
               <span className="text-yukan">$Yukan</span> andlatest trend
            </small>
            <div className="p-5 fs-2 row">
               <div className="col-lg-3 col-6 col-md-6 my-4">
                  <a
                     href="https://twitter.com/yukantokennew?s=21"
                     className="p-3 bg-yukan m-3 text-white rounded"
                     target={"_blank"}
                  >
                     {" "}
                     <FaTwitterSquare />{" "}
                  </a>
               </div>
               <div className="col-lg-3 col-6 col-md-6 my-4">
                  <a
                     href="https://t.me/+XSRoQswrJnkzYjk8"
                     className="p-3 bg-yukan m-3 text-white rounded"
                     target={"_blank"}
                  >
                     {" "}
                     <FaTelegram />{" "}
                  </a>
               </div>
               <div className="col-lg-3 col-6 col-md-6 my-4">
                  <a
                     href="mailto:Yukantoken1@gmail.com"
                     className="p-3 bg-yukan m-3 text-white rounded"
                  >
                     {" "}
                     <FaEnvelope />{" "}
                  </a>
               </div>
               <div className="col-lg-3 col-6 col-md-6 my-4">
                  <a
                     href="https://instagram.com/yukantoken?igshid=OGQ5ZDc2ODk2ZA=="
                     className="p-3 bg-yukan m-3 text-white rounded"
                     target={"_blank"}
                  >
                     {" "}
                     <FaInstagramSquare />{" "}
                  </a>
               </div>
            </div>
         </div>
         <div className="f-body p-3 text-muted fs-5 text-center">
            <span>
               {" "}
               <span className="text-yukan fw-bold">YUKAN</span> © 2022.All
               Right Reserved
            </span>
         </div>
      </div>
   );
}
