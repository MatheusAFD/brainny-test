import { LogoutOutlined } from "@ant-design/icons";
import { ButtonHTMLAttributes } from "react";

interface Logout extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Logout(props: Logout) {
  return (
    <button
      {...props}
      className="flex items-center gap-[10px] px-4 cursor-pointer hover:text-principal-900 "
    >
      <LogoutOutlined className="text-2xl" />
      <p>Sair</p>
    </button>
  );
}
