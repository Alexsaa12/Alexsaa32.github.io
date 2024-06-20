import { FC } from "react";
import { FaPen } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import Classis from "../style/Payments.module.css"


const Payments: FC = () => {
    return (
        <div className={Classis["container"]}>
            <div className={Classis["payments"]}>
                <h3 className={Classis["title"]}>Payments Method </h3>
                <button className={Classis["add"]}><GrAdd /> ADD NEW CARD</button>
            </div>

            <div className={Classis["payment_elemTRue"]}>
                <div className={Classis["CardCodeElement"]}>
                    <div className={Classis["CardCode"]}>
                        <FaCcMastercard color="blue," fontSize={"40px"}   className={Classis["master"]}/>
                        <div className={Classis["CardCode_id"]} >
                            <p>**** **** **** 5248< FaPen  className={Classis["pen"]}/></p>
                        </div>

                    </div>
                </div>
                <div className={Classis["CardCodeElement"]}>
                    <div className={Classis["CardCode"]}>
                        <SiVisa color="blue," fontSize={"40px" }className={Classis["master"]} />
                        <div className={Classis["CardCode_id"]}>
                            <p>**** **** **** 5248< FaPen className={Classis["pen"]} /></p>
                        </div>

                    </div>
                </div>
            </div>
            

        </div>
    )
}
export default Payments