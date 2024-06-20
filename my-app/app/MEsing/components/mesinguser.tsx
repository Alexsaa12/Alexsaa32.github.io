import { FC } from "react";
import { Mesingel } from "./mesingel"
import CLassis from "../style/Mesing.module.css"

const Asa: FC = () => {
    const info = Mesingel.map((el) => {
        return (
            <div key={el.id} className={CLassis["info"]}>
                <div className={CLassis["info1"]}>
                    <div className={CLassis["info2"]}>
                        <p style={{backgroundColor:el.bgcolr}} className={CLassis["info_P"]}>{el.text}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div>
                <div>
                    <h5>Username</h5>
                </div>
                {info}
            </div>
        </div>
    )
}

export default Asa