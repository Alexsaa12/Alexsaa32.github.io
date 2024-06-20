import { FC } from "react";
import Classis from "../style/Billing.module.css"
import { FaWifi } from "react-icons/fa";
import { Lnvoices } from "./lnvoices";
 import Payments  from "./Payment ";
 import Dewelopmend from"./mechdiv"
 import USERHasiv from "../components/Cpmponetin"
const Billinga: FC = () => {

    let invoices = Lnvoices.map((el) => {
        return (
            <div key={el.Id} className={Classis["invoices"]}>
                <div className={Classis["invoices_data"]}>
                    <ul className={Classis["list"]}>
                        <li className={Classis["list_item"]}>
                            <div className={Classis["list_item_data"]}>
                                <span className={Classis["list_item_title"]}>{el.Date}</span>
                                <div>
                                    <span className={Classis["list_item_subtitle"]}>{el.CodeId}</span>
                                </div>
                            </div>
                            <div className={Classis["list_item_data1"]}>
                                <span>{el.mani}</span>
                                {/* <span>{el.icon}</span> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )



    })
    return (
        <div className={Classis["cards-container_li"]}>
            <div className={Classis["cards-container"]}>

                <div className={Classis["full-codes-container"]}>
                    <div className={Classis["card-container"]}>
                        <div className={Classis["card-icon-container"]}>
                            <span className={Classis["icon-container"]}>
                                <FaWifi className={Classis["icon"]} />
                            </span>
                        </div>
                        <div className={Classis["card-info-container"]}>
                            <span className={Classis["card-number"]}>4562   1122   4594   7852</span>
                            <div className={Classis["card-detail-container"]}>
                                <div className={Classis["card-detail-item"]}>
                                    <span className={Classis["card-detail-title"]}>Card Holder</span>
                                    <span className={Classis["card-detail-value"]}>Jack Peterson</span>
                                </div>
                                <div className={Classis["card-detail-item"]}>
                                    <span className={Classis["card-detail-title"]}>Expires</span>
                                    <span className={Classis["card-detail-value"]}>02/25</span>
                                </div>
                            </div>
                            <div className={Classis["card-img-container"]}>
                                <img src="img/kridit.png" alt="" className={Classis["card-img"]} />
                            </div>
                        </div>
                    </div>
                        <div>
                        <Payments></Payments>
                     </div>
                </div>

                <div className={Classis["haLf"]}>
                    <div className={Classis["card_Cildr"]}>
                        <div className={Classis["card"]}>
                            <div className={Classis["img"]}>
                                <div className={Classis["imgis"]}>
                                    <img src="img/bank.png" alt="" className={Classis["imgisIcon1"]} />
                                </div>
                                <div className={Classis["textis"]}>
                                    <span className={Classis["test_span"]}>Salary</span>

                                    <span className={Classis["text1"]}>Belong Interactive</span>
                                    <h5 className={Classis["text_h5"]}>+$2000</h5>
                                </div>
                            </div>
                        </div>
                        <div className={Classis["card"]}>
                            <div className={Classis["img"]}>
                                <div className={Classis["imgis"]}>
                                    <img src="img/Paepl.png" alt="" className={Classis["imgisIcon"]} />
                                </div>
                                <div className={Classis["textis"]}>
                                    <span className={Classis["test_span"]}>Paypal</span>
                                    <span className={Classis["text1"]}>Freelance Payment</span>
                                    <h5 className={Classis["text_h5"]} >+$455.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Classis["invoices-container"]}>
                    <div className={Classis["invoices-header"]}>
                        <div className={Classis["invoices-header-left"]}>
                            <h6 className={Classis["invoices-header-title"]}>Invoices</h6>
                        </div>
                        <button className={Classis["invoices-header-btn"]}>WIEv ALL</button>
                    </div>
                    {invoices}
                </div>
            </div>
            <div className={Classis["userhasiv"]}>
                       <Dewelopmend></Dewelopmend>
                       <USERHasiv></USERHasiv> 
            </div>
    
        </div>

    )
}
export default Billinga

// 