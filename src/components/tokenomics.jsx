import React from "react";
import { FaCopy } from "react-icons/fa";

export default function Tokenomics() {
   function copyToClipboard() {
      navigator.clipboard
         .writeText("0xd086B849a71867731D74D6bB5Df4f640de900171")
         .then(() => {
            alert("Address Copied");
         })
         .catch((error) => {
            console.error("Error copying text to clipboard:", error);
            alert("Error copying text to clipboard!");
         });
   }
   return (
      <div className="tokenomics pb-5" id="tokenomics">
         <div className="container">
            <div className="tk-head d-flex justify-content-center">
               <h1 className="text-yukan fw-bold"><span>Token</span>omics</h1>
            </div>
            <div className="tk-card text-break d-flex justify-content-center">
               <div className="col-lg-6 wrap p-5 mt-4 col-md-8 col-12">
                  <table className="">
                     <tr>
                        <th>Token Name</th>
                        <td>YUKAN</td>
                     </tr>
                     <tr>
                        <th>Network:</th>
                        <td>Binance Smart Chain (BSC) Network</td>
                     </tr>
                     <tr>
                        <th>Total Supply</th>
                        <td>500,000,000,000,000</td>
                     </tr>
                     <tr>
                        <th>Tax</th>
                        <td>7/7%</td>
                     </tr>
                     <tr>
                        <th>Reward (1%)</th>
                        <td>$DTG for holders </td>
                     </tr>
                  </table>
                  {/* <div className="d-flex fs-5 ">
                     <div className="col">
                        <ul className="list-style-type-none text-yukan fw-bold">
                           <li>Name:</li>
                           <li>Chain:</li>
                           <li>Total Supply:</li>
                           <li>Tax(%):</li>
                        </ul>
                     </div>
                     <div className="col">
                        <ul className="list-style-type-none text-black text-right fw-bold">
                           <li>YUKAN </li>
                           <li>Binance Smart Chain (BSC)</li>
                           <li>50,000,000,0000,000</li>
                           <li>7/7</li>
                        </ul>
                     </div>
                  </div> */}
                  <div className="text-center mt-5 text-truncate text-wrap">
                     <small className="text-muted">
                        0xd086B849a71867731D74D6bB5Df4f640de900171
                     </small>{" "}
                     <br />
                     <button
                        className="btn btn-sm rounded-pill bg-yukan text-white"
                        onClick={copyToClipboard}
                     >  
                        <FaCopy /> Copy Address
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
