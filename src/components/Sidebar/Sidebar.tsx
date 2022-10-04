import { LogoPurple } from "../Logo/LogoPurple";
import order from "../../assets/img/order.png";
import logout from "../../assets/img/logout.png";
import box from "../../assets/img/box.png";

export function Sidebar(props: { type: "admin" | "colaborator" }) {
  return (
    <nav className="w-[180px] bg-white h-screen ">
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

      <span
        className="absolute bottom-0 px-4 flex gap-[10px] cursor-pointer py-6"
        onClick={() => {
          localStorage.clear();
        }}
      >
        <img src={logout} className="w-6 h-6" />
        Sair
      </span>
    </nav>
  );
}
