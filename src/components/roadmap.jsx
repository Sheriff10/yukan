import React from "react";

export default function Roadmap() {
   const liFunc = (text) => {
      return (
         <li className="mb-4">
            <img
               src="claw.png"
               alt="yukan's claw"
               className="img-fluid"
               width={25}
            />{" "}
            {text}
         </li>
      );
   };
   return (
      <div className="roadmap text-white py-5" id="roadmap">
         <div className="container">
            <div className="r-head text-uppercase text-center py-4">
               <h1>Roadmap</h1>
            </div>
            <div className="r-body">
               <div class="row">
                  <div className="col-12 col-lg-6 col-md-6 p-5 ">
                     <div className="r-card p-3 bg-light rounded text-black">
                        <div className="r-card-head py-2 mb-1 border-bottom border-primary">
                           <h1 className="fw-bold text-yukan">Q1</h1>
                        </div>
                        <div className="r-card-body">
                           <ul className="m-0 p-0">
                              {liFunc("Launch A Public Sale")}
                              {liFunc("Social Media Handles Creation")}
                              {liFunc("Meme Contest")}
                              {liFunc("First CEX Listing")}
                              {liFunc(
                                 "First CONSERVATION Campaign (Shelter Donation)"
                              )}
                              {liFunc("NFT Creation")}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 p-5 ">
                     <div className="r-card p-3 bg-light rounded text-black">
                        <div className="r-card-head py-2 mb-1 border-bottom border-primary">
                           <h1 className="fw-bold text-yukan">Q1</h1>
                        </div>
                        <div className="r-card-body">
                           <ul className="m-0 p-0">
                              {liFunc("Launch A Public Sale")}
                              {liFunc("Social Media Handles Creation")}
                              {liFunc("Meme Contest")}
                              {liFunc("First CEX Listing")}
                              {liFunc(
                                 "First CONSERVATION Campaign (Shelter Donation)"
                              )}
                              {liFunc("NFT Creation")}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 p-5 ">
                     <div className="r-card p-3 bg-light rounded text-black">
                        <div className="r-card-head py-2 mb-1 border-bottom border-primary">
                           <h1 className="fw-bold text-yukan">Q1</h1>
                        </div>
                        <div className="r-card-body">
                           <ul className="m-0 p-0">
                              {liFunc("Launch A Public Sale")}
                              {liFunc("Social Media Handles Creation")}
                              {liFunc("Meme Contest")}
                              {liFunc("First CEX Listing")}
                              {liFunc(
                                 "First CONSERVATION Campaign (Shelter Donation)"
                              )}
                              {liFunc("NFT Creation")}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 p-5 ">
                     <div className="r-card p-3 bg-light rounded text-black">
                        <div className="r-card-head py-2 mb-1 border-bottom border-primary">
                           <h1 className="fw-bold text-yukan">Q1</h1>
                        </div>
                        <div className="r-card-body">
                           <ul className="m-0 p-0">
                              {liFunc("Launch A Public Sale")}
                              {liFunc("Social Media Handles Creation")}
                              {liFunc("Meme Contest")}
                              {liFunc("First CEX Listing")}
                              {liFunc(
                                 "First CONSERVATION Campaign (Shelter Donation)"
                              )}
                              {liFunc("NFT Creation")}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
