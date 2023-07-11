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
                  <img src="lh.png" alt="About Yukan" className="img-fluid" width={"400px"} />
               </div>
               <div className="col-lg-6 col-md-6 col-12">
                  <div className="abt-text p-4 mb-3">
                     <span className="fw-bold fs-4">About <span className="text-yukan">YUKAN</span>  </span> <br />
                     <small className="fs-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nisi, error ex pariatur aut consectetur numquam
                        non quasi recusandae placeat maiores praesentium.
                        Eligendi assumenda esse aperiam incidunt voluptatibus
                        consequatur voluptas ipsam!
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nam consectetur expedita eum eaque harum incidunt
                        repudiandae!ƒ
                     </small>
                     <div className="mt-4">
                        <a href="#" className="btn btn-lg rounded-pill bg-yukan text-white">Read Whitepaper</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
