import { ReactNode, useContext, useState } from "react";
import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import { Context } from "../../Context/AuthContext";
import { ButtonMobile } from "../Landing/Button/ButtonMobile";
import { formatData } from "../../utils/format-data";

interface HeaderMenu {
  children: ReactNode;
}

export function HeaderMenu(props: HeaderMenu) {
  const { handleLogout } = useContext(Context);
  const date = new Date();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const user = localStorage.getItem("username");

  return (
    <>
      {showMenu === true && (
        <div className="fixed md:hidden right-0 min-h-screen w-64 z-50 bg-[#F2F2F2] shadow-2xl ">
          <div className="border-b border-[#AFAFAF] p-6 flex items-center">
            <p className="text-sm text-[#303030] font-light">Novo Registro</p>
            <button
              className="flex items-center gap-[10px] px-4 cursor-pointer "
              onClick={handleLogout}
            >
              <LogoutOutlined className="text-2xl" />
              <p>Sair</p>
            </button>
          </div>

          <div className="flex flex-col gap-5 p-4">
            <div className="gap-y-2 ">
              <p className="font-bold">Colaborador</p>
              <span className="text-[13px]">{user}</span>
            </div>

            <div className="gap-y-2">
              <p className="font-bold">Data</p>
              <span className="text-[13px]">
                {formatData(date, "dd'/'MM'/'yyyy")}
              </span>
            </div>

            <div className="gap-y-2">
              <p className="font-bold">Horário</p>
              <span className="text-[13px]">{formatData(date, "kk':'mm")}</span>
            </div>
          </div>

          <div className="absolute bottom-0 p-4 flex gap-2 py-4 justify-center items-center border-t border-[#AFAFAF]">
            {props.children}
            <ButtonMobile
              onClick={() => {
                setShowMenu(false);
              }}
              text="Cancelar"
              styleButton="secundary"
            />
          </div>
        </div>
      )}

      <header className="flex justify-between items-center md:hidden pt-10 px-4 z-0">
        <MenuOutlined
          className="text-3xl text-[#219653]"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />

        <div className="flex gap-4 border-b border-[#AFAFAF]">
          <p className="text-sm text-[#303030] font-light ">Novo Registro</p>
          <ButtonMobile
            onClick={() => {
              setShowMenu(true);
            }}
            text="Registrar"
            styleButton="primary"
          />
        </div>
      </header>
    </>
  );
}
