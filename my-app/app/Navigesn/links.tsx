import Link from "next/link";
import { FC } from "react";
import Classis from "./style/links.module.css"

const Links: FC = () => {
  return (
    <div className={Classis["div_contanier"]}>
      <div className={Classis["div_title"]}> <img src="img/logo.png" alt="" className={Classis["logo"]} />Material Dashboard 2</div>
      <hr className={Classis["hr"]} />
      <ul className={Classis["ul_contanier"]}>
        <li>
          <Link className={Classis["link_nav1"]} href="/">Dashboard</Link>
        </li>
        <li>
          <Link className={Classis["link_nav"]} href={"/Tablas"}>Tables</Link>
        </li>
        <li>
          <Link className={Classis["link_nav"]} href={"/Billing"}>Billing</Link>
        </li>
        <li>
          <Link className={Classis["link_nav"]} href="/rtl">RTL</Link>
        </li>
        <li>
          <Link className={Classis["link_nav"]} href={"/MEsing"}>Notifications</Link>
        </li>
        <li>
          <Link className={Classis["link_nav"]} href="/profile">Profile</Link>
        </li>
        <li>
          <Link className={Classis["link_nav"]} href="/signin">Sign In</Link>
        </li>
        <li>
          <Link className={Classis["link_nav"]} href="/signup">Sign Up</Link>
        </li>
      </ul>
      <div className={Classis["Upgrade"]}>
        <Link className={Classis["link_nav"]} href="/upgrade">UPGRADE TO PRO</Link>
      </div>
    </div>
  );
};


export default Links
