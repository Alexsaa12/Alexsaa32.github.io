import { FC } from "react";
import { UserTextImg } from "./UserImgText"
import Classis from "../style/UserEL.module.css"
const Useer: FC = () => {

    const UserDetails = (el: any) => (
        <div className={Classis["userdetails"]}>
            <tr key={el.IdEL} className={Classis["trelement"]}>
                <td className={Classis["td"]}>
                    <img src={el.imageConfigDefault} alt="" />
                    <span>{el.text}</span>
                </td>
                <td className={Classis["td1"]}>
                    <img src={el.Image} alt="" />
                    <span>{el.Dolr}</span>
                    <img src={el.tkosimg} alt="" />
                </td>
            </tr>
        </div>
    );

    return (
        <div className={Classis["userstate"]}>

            <table className={Classis["table"]}>
                <thead className={Classis["thead"]}>
                    {/* 3 hat */}
                   <div className={Classis["ComponetsProject"]}>
                        <div className={Classis["Projectelement"]}>
                            <div className={Classis["titleElement"]}>
                                <h6 className={Classis["h6"]}>Projects</h6>
                                &nbsp;<strong className={Classis["strong"]}>30 done</strong> this month
                                
                                    
                            </div>
                            <div className={Classis["iconElement"]}>
                                {/* <span className={Classis["material-icons-round"]}>more_vert</span> */}
                            </div>
                        </div>
                    </div>
                    <tr className={Classis["trs"]}>
                        <th>COMPANIES</th>
                        <th>MEMBERS</th>
                        <th>BUDGET</th>
                        <th>COMPLETION</th>
                    </tr>
                </thead>
                <tbody className={Classis["tbody"]}>
                    {UserTextImg.map(UserDetails)}
                </tbody>
            </table>
            <div className={Classis["state"]}>
                <div className={Classis["statik"]}>
                    <h3>Orders overview</h3>
                    {UserTextImg.map((el, index) => (
                        <div key={index} className={Classis["element"]}>
                            <p>${el.Dolr}, {el.text}</p>
                            {/* <span>{el.Deadline}</span> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Useer;

