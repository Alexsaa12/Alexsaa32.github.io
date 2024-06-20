import { FC } from "react";

import Classis from "../style/nechasediv.module.css"
import { elmentINformacia } from "./informesn"

const Dewelopmend: FC = () => {
 
 
     const element_info = elmentINformacia.map((el) => {
          return (
               <div key={el.Id} className={Classis["mechdivx"]}>
                    <div className={Classis["textterdivel"]}>
                         <div className={Classis["textterdivel1"]}>
                              <span className={Classis["title_soan"]}>{el.title}</span>
                              <div  className={Classis["btn_div"]}>
                                   <button className={Classis["btn_el"]}>{el.DELETE}</button>
                                   <button  className={ Classis["btn_el1"]}>{el.EDIT}</button>
                              </div>

                         </div>
                         <div className={Classis["texterText"]}>
                              <div className={Classis["lorem_text"]}>
                                   <span className={Classis["texterText_span"]}>{el.Liam.CreditUserName}</span>
                                   <span>{el.Liam.UserEmailAddres}</span>
                                   <span>{el.Liam.VatIdCode}</span>
                                 
                              </div>
                         </div>
                    </div>
               </div>
          )
     })

     return (
          <div className={Classis["mechdiv"]}>
               <div className={Classis["mechdiv1"]}>
                    <h4>Billing Information</h4>
               </div>
               <div className={Classis["mechdiv2"]}>
                    {element_info}
               </div>
          </div>
     )
}

export default Dewelopmend