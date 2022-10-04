import { LogoWhite } from "../../Logo/LogoWhite";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <>
      <header className="flex justify-between container pt-[88px]">
        <LogoWhite width={164} height={38} />

        <ul className="flex items-center gap-11 text-white">
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
