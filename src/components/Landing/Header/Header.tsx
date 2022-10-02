import { LogoWhite } from "../../Logo/LogoWhite";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <>
      <header className="flex justify-between container pt-[88px]">
        <LogoWhite width={142} height={38} />

        <ul className="flex gap-8 text-white">
          <li>Inicio</li>
          <li>Planos</li>
          <li>
            <Button text="Fazer login" type="primary" />
          </li>
        </ul>
      </header>
    </>
  );
}
