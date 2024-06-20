import { FC } from "react";
import { Product } from "./egar";
import Classis from "../style/home.bg.module.css"
const Homebg: FC = () => {
    let prografiac = Product.map((item) => {
        return (
            <div key={item.id} className={Classis["card"]} >
                {/* <div className={Classis["icon"]}> `=</div> */}
                <img src={item.imageConfigDefault} className={Classis["icon"]} alt="" />
                <div className={Classis["cardtext"]}>
                    <span className={Classis["textarea"]}>{item.title}</span> 
                     <span className={Classis["value"]}>{item.numberText}</span>
                </div>
              
                <hr />
                <h4 className={Classis["description"]}>{item.numbrtextis} <span className={Classis["green"]}>{item.leste}</span></h4>

            </div>
        )
    })
    return (
        <div className={Classis["all"]}>
            <div className={Classis["dashboard"]}>
                {prografiac}
            </div>
        </div>
    )
}

export default Homebg