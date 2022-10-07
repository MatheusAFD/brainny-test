import { ReactNode, useContext, useRef, useState } from "react";
import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import { Context } from "../../Context/AuthContext";
import { ButtonMobile } from "../Landing/Button/ButtonMobile";
import { formatData } from "../../utils/format-data";
import { Logout } from "../Landing/Button/Logout";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

interface HeaderMenu {
  children?: ReactNode;
}

export function HeaderMenu(props: HeaderMenu) {
  const { handleLogout } = useContext(Context);
  const date = new Date();
  const user = localStorage.getItem("username");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#F2F2F2" w="260px">
          <DrawerCloseButton />
          <DrawerHeader borderBottom="1px solid #AFAFAF" padding="0px">
            <div className="p-6 flex items-center">
              <p className="text-sm text-[#303030] font-light">Novo Registro</p>
              <Logout onClick={handleLogout} />
            </div>
          </DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col gap-5 mt-5">
              <div className="gap-y-2">
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
                <span className="text-[13px]">
                  {formatData(date, "kk':'mm")}
                </span>
              </div>
            </div>
          </DrawerBody>

          <DrawerFooter
            display="flex"
            gap={4}
            justifyContent="center"
            borderTop="1px solid #AFAFAF"
          >
            {props.children}
            <ButtonMobile
              onClick={onClose}
              text="Cancelar"
              styleButton="secundary"
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <header className="flex justify-between items-center md:hidden pt-10 px-4 z-0">
        <MenuOutlined
          className="text-3xl text-[#219653]"
          ref={btnRef}
          onClick={onOpen}
        />

        <div className="flex gap-4 border-b border-[#AFAFAF]">
          <p className="text-sm text-[#303030] font-light ">Novo Registro</p>
          <ButtonMobile
            ref={btnRef}
            onClick={onOpen}
            text="Registrar"
            styleButton="primary"
          />
        </div>
      </header>
    </>
  );
}
