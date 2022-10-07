import { LogoutOutlined } from "@ant-design/icons";
import { ButtonHTMLAttributes } from "react";

interface Logout extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Logout(props: Logout) {
  return (
    <button
      className="flex items-center gap-[10px] px-4 cursor-pointer "
      {...props}
    >
      <LogoutOutlined className="text-2xl" />
      <p>Sair</p>
    </button>
  );
}
