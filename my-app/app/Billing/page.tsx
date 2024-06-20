import { FC } from "react"
import Billinga from "./components/billingBG"
import CLassis from "./page.module.css";

 const Billing:FC =()=>{
    return(
       <div className={CLassis["Billing"]}>
          <Billinga/>
          
       </div>
    )
 }

 export default Billing
 