import { useContext } from "react";

import { Context } from "../../Context/AuthContext";

import { LogoPurple } from "../Logo/LogoPurple";
import order from "../../assets/img/order.png";

import box from "../../assets/img/box.png";

import { Logout } from "../Landing/Button/Logout";

export function Sidebar(props: { type: "admin" | "colaborator" }) {
  const { handleLogout } = useContext(Context);

  return (
    <nav className="w-[180px] bg-white h-screen fixed hidden md:block ">
      <div className="flex justify-center items-center w-full h-24">
        <LogoPurple width={134} height={31} />
      </div>
      <span
        className="flex gap-2 relative justify-center items-center w-full h-24 border-y border-[#00000014] text-sm text-principal-900 
        after:absolute after:h-[100%] after:bg-principal-900 after:w-1 after:left-0
      "
      >
        <img src={props.type === "admin" ? box : order} alt="" />
        {props.type === "admin" ? <>Dashboard</> : <>Meus registros</>}
      </span>
      <Logout className="bottom-0 absolute p-4" onClick={handleLogout} />
    </nav>
  );
}
