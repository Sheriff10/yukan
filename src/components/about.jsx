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
                        YUKAN token is a meme token launched on the 14th of July
                        2023. YUKAN started off with a Liquidity of only $18 and
                        a Market Cap of $49. Our aim is to be a witness to the
                        world that greatness can come from little things if
                        diligence, dedication and smart work is put in. We began
                        at such little stage just to prove this. We will be used
                        as that foolish thing that will confound the wise! We
                        will Witness that though our beginnings be small, our
                        latter end shall greatly increase. The YUKAN team is a
                        hardworking team that is consistently putting in the
                        work but our Greatest advantage is that WE HAVE BACKING!
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
