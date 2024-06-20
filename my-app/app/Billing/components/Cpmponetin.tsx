"use client"
import { FC } from "react";
import Classis from "../style/conpilator.module.css"
import { MdDateRange } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

let USERHasiv: FC = () => {
   return (

      <div className={Classis["Cpmponetin"]}>
         <div className={Classis["Cpmponetinis"]}>
            <span className={Classis["h6ELement"]}>Your Transaction's</span>
            <span className="elementIcon"><MdDateRange />23 - 30 March 2020</span>

         </div>
         <div>
            <span className={Classis["leokalActiv"]}>NEWEST</span>
            <ul className={Classis["ulCpmponetin"]}>
               <li className={Classis["liCpmponetin"]}>
                  <div className={Classis["liCpmponetin_data"]}>
                     <div className={Classis["author-info"]}>
                        <button className={Classis["button-icon"]}><RiArrowDownSLine /></button>
                        <div className={Classis["span_spam_el-element"]}>
                           <div className={Classis["fl_elInG"]}>
                              <span>Apple</span>
                              <span>+ $ 2,500</span>
                           </div>

                           <div>
                              <span> 27 March 2020, at 04:30 AM</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               <li className={Classis["liCpmponetin"]}>
                  <div className={Classis["liCpmponetin_data"]}>
                     <div className={Classis["author-info"]}>
                        <button className={Classis["button-icon"]}><RiArrowDownSLine /></button>
                        <div className={Classis["span_spam_el-element"]}>
                           <div className={Classis["fl_elInG"]}>
                              <span>Apple</span>
                              <span>+ $ 2,500</span>
                           </div>

                           <div>
                              <span> 27 March 2020, at 04:30 AM</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>

            </ul>
         </div>
         <div>
            <span className={Classis["leokalActiv"]}>NEWEST</span>
            <ul className={Classis["ulCpmponetin"]}>
               <li className={Classis["liCpmponetin"]}>
                  <div className={Classis["liCpmponetin_data"]}>
                     <div className={Classis["author-info"]}>
                        <button className={Classis["button-icon"]}><RiArrowDownSLine /></button>
                        <div className={Classis["span_spam_el-element"]}>
                           <div className={Classis["fl_elInG"]}>
                              <span>Apple</span>
                              <span>+ $ 2,500</span>
                           </div>

                           <div>
                              <span> 27 March 2020, at 04:30 AM</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               <li className={Classis["liCpmponetin"]}>
                  <div className={Classis["liCpmponetin_data"]}>
                     <div className={Classis["author-info"]}>
                        <button className={Classis["button-icon"]}><RiArrowDownSLine /></button>
                        <div className={Classis["span_spam_el-element"]}>
                           <div className={Classis["fl_elInG"]}>
                              <span>Apple</span>
                              <span>+ $ 2,500</span>
                           </div>

                           <div>
                              <span> 27 March 2020, at 04:30 AM</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               <li className={Classis["liCpmponetin"]}>
                  <div className={Classis["liCpmponetin_data"]}>
                     <div className={Classis["author-info"]}>
                        <button className={Classis["button-icon"]}><RiArrowDownSLine /></button>
                        <div className={Classis["span_spam_el-element"]}>
                           <div className={Classis["fl_elInG"]}>
                              <span>Apple</span>
                              <span>+ $ 2,500</span>
                           </div>

                           <div>
                              <span> 27 March 2020, at 04:30 AM</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
         
      </div>

   )
}
export default USERHasiv