import { LogoWhite } from "../../Logo/LogoWhite";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <>
      <header className="flex justify-center items-center flex-wrap md:justify-between container pt-12 md:pt-[60px] ">
        <LogoWhite width={164} height={38} />

        <ul className="flex justify-center z-50 items-center gap-8 md:gap-11 text-white flex-wrap mt-5 smoke-login">
          <li>Inicio</li>
          <li>Planos</li>
          <li>
            <Button to="login" text="Fazer login" type="primary" />
          </li>
        </ul>
      </header>
    </>
  );
}
