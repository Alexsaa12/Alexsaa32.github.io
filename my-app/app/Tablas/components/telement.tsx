import { FC } from "react";
import Classis from "../style/telement.module.css"
import { Product ,} from "./Tabla";
 import {LesnTable} from "./Table1"
 import { RxDotsVertical } from "react-icons/rx";
const Tadingel: FC = () => {
    let prografiac = Product.map((el) => {
        return (
            <tr key={el.id} className={Classis["element"]}>
                <td>
                    <div className={Classis["avatar-container"]}>
                        <div className={Classis["avatar-img"]}>
                            <img src={el.image} alt={el.text} className={Classis["avatar"]} />
                        </div>
                        <div className={Classis["author-info"]}>
                            <span className={Classis["author-name"]}>{el.name}</span>
                            <span className={Classis["author-email"]}>{el.email}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div className={Classis["function-container"]}>
                        <span>{el.text}</span>
                        <span>{el.leste}</span>
                    </div>
                </td>
                <td>
                    <div className={Classis["status-container"]}>
                        <span className={Classis["status-label"]}>
                            <span>online</span>
                        </span>
                    </div>
                </td>
                <td>
                    <div className={Classis["employed-container"]}>
                        <a href="#" className={Classis["data"]}>{el.Data}</a>
                    </div>
                </td>
                <td>
                    <div className={Classis["action-container"]}>
                        <a href="#" className={Classis["Edit"]}>Edit</a>
                    </div>
                </td>
            </tr>
        )
    })
    let prografia1 = LesnTable.map((el) => {
        return (
            <tr key={el.id} className={Classis["element1"]}>
                <td>
                    <div className={Classis["avatar-container1"]}>
                        <div className={Classis["avatar-img1"]}>
                            <img src={el.img} className={Classis["avatar1"]} alt="" />
                        </div>
                        <div className={Classis["author-info1"]}>
                            <span className={Classis["author-title1"]}>{el.title}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div className={Classis["function-container1"]}>
                        <span>{el.$}</span>
                    </div>
                </td>
                <td>
                    <div className={Classis["status-container1"]}>
                        <span className={Classis["status-label1"]}>
                            <span className={Classis["status-color1"]}>{el.status}</span>
                        </span>
                    </div>
                </td>
                <td className={Classis["td_1"]}>
                    <div className={Classis["employed-container1"]}>
                    <span>{el.COMPLETION.pracent}</span>
                        <img src={el.COMPLETION.img1} className={Classis["img1"]} alt="" />
                    </div>
                </td>
                <td>
                    <div className={Classis["action-container1"]}>
                    <RxDotsVertical />
                    </div>
                </td>
            </tr>

        )
    })
    return (
        <div className={Classis["table"]}>
            <div className={Classis["table-container"]}>
                <div className={Classis["table-title"]}>
                    <h6 className={Classis["title"]}>Authors Table</h6>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Function</th>
                            <th>Status</th>
                            <th>Employed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prografiac}
                    </tbody>
                </table>

            </div>
            <div className={Classis["table-container1"]}>
                <div className={Classis["table-title"]}>
                    <h6 className={Classis["title"]}>Projects Table</h6>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Function</th>
                            <th>Status</th>
                            <th>Employed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prografia1}
                    </tbody>
                </table>

            </div>

        </div>
    )


}
export default Tadingel