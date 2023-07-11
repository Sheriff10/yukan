import React from "react";
import { FaTelegram, FaTelegramPlane, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
   return (
      <div className="footer bg-black">
         <div className="f-head text-center text-light">
            <h1><span className="text-yukan">Yukan</span> Socials</h1>
            <br /> 
            <small className="text-muted fs-6">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
               Enim possimus et saepe in officia tenetur? Perferendis doloremque
               iure hic architecto.
            </small>
            <div className="py-5 fs-2">
               <a href="#" className="p-3 bg-yukan m-3 text-white rounded">
                  {" "}
                  <FaTwitterSquare />{" "}
               </a>
               <a href="#" className="p-3 bg-yukan m-3 text-white rounded">
                  {" "}
                  <FaTelegram />{" "}
               </a>
            </div>
         </div>
         <div className="f-body p-3 text-muted fs-5 text-center">
            <span> <span className="text-yukan fw-bold">YUKAN</span> © 2022.All Right Reserved</span>
         </div>
      </div>
   );
}