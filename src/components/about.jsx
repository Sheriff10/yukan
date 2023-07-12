import React from "react";

export default function About() {
   return (
      <div className="about bg-black text-white" id="about">
         <div className="container">
            {/* <div className="abt-head py-5 d-flex justify-content-center">
               <div className="">
                  <h1>ABOUT</h1>
               </div>
            </div> */}
            <div className="row align-items-center">
               <div className="col-lg-6 col-md-6 col-12">
                  <img
                     src="lh.png"
                     alt="About Yukan"
                     className="img-fluid"
                     width={"400px"}
                  />
               </div>
               <div className="col-lg-6 col-md-6 col-12">
                  <div className="abt-text p-4 mb-3">
                     <span className="fw-bold fs-4">
                        About <span className="text-yukan">YUKAN</span>{" "}
                     </span>{" "}
                     <br />
                     <small className="fs-6">
                        YUKAN Token, launched on June 14, 2023, started with a
                        liquidity of $18 and a market cap of $49. As a meme
                        token, our sincere team aims to demonstrate that
                        greatness can come from humble beginnings with
                        diligence, dedication, and smart work. We believe in
                        confounding the wise and witnessing exponential growth.
                        Backed by a hardworking team, YUKAN has a promising
                        future.
                     </small>
                     <div className="mt-4">
                        <a
                           href="./YUKAN WHITEPAPER.pdf"
                           className="btn btn-lg rounded-pill bg-yukan text-white"
                           download
                        >
                           Read Whitepaper
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
