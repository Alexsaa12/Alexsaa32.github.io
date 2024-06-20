import { FC } from "react";
import { temmin } from "./editor";
  import Classis from "../style/Hading.module.css"
const Hading: FC = () => {

    let pre = temmin.map((el) => {
        return (

            <div key={el.IdleDeadline} className={Classis["cardis"]} >
                <img  className={Classis["img"]}  src={el.img} />
                <div className={Classis["textis"]}>
                    <h2 className={Classis["test"]}>{el.test}</h2>
                    <span className={Classis['text']}>{el.text}</span>
                    {/* <span className={Classis["span"]}>{el.span}</span> */}
                </div>
                <hr />
                <span className={Classis["span1"]}>{el.span}</span>
            </div>
        )

    })
    return (
        // <div className={Classis["uxir"]}>
        //     <div className={Classis["campaign"]}>
        //         <h6 className={Classis["view"]}>website views</h6>
        //         <div className={Classis["performance"]}>Last Campaign Performance</div>
        //         <hr className={Classis["divider"]} />
        //         <div className={Classis["campaignDate"]}>
        //             <span className={Classis["dateIcon"]}><span className={Classis["dateIconInside"]}>schedule</span></span>
        //             <span className={Classis["dateText"]}>campaign sent 2 days ago</span>
        //         </div>
        //     </div>
             <div className={Classis["cards"]}>
            <div className={Classis["elementis"]}>
                {pre}
            </div> 
        </div>
    )
}
export default Hading