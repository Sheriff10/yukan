import React from "react";
import { FaFire, FaLock, FaUsers } from "react-icons/fa";
import cards from "./cards.json";
export default function Card() {
   const icon = [<FaUsers />, <FaLock />, <FaFire />];
   return (
      <div className="cards pb-4">
         <div className="container">
            <div className="c-head text-center fw-bold py-3">
               <h1 className="fw-bold">
                  <span className="text-yukan"> Yukan</span> Token
               </h1>
               <small>WE HAVE BACKING</small>
            </div>
            <div className="row">
               {cards.cards.map((i, index) => (
                  <div className="col-lg-4 col-md-6 p-5  col-12" key={index}>
                     <div className="card-con p-3 shadow">
                        <div className="c-card-icon d-flex justify-content-center py-4">
                           <i className="fs-1 bg-yukan rounded-circle px-4 py-3">
                              {icon[index]}
                           </i>
                        </div>
                        <div className="c-card-text text-center">
                           <span className="fw-bold">{i.title}</span> <br />
                           <small className="text-muted">{i.text}</small>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
