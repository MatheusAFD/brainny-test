import HomeImage from "../../../assets/img/homeImage.png";
import { ButtonRegister } from "../Button/ButtonRegister";
import { NavItem } from "../Button/NavLanding";

export function SectionHome() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row justify-center  md:justify-between container pt-36 text-white "
    >
      <div className="lg:max-w-[50%]  p-4 relative blur-effect">
        <p className="text-2xl tracking-[0.165em] uppercase font-light">
          Esquece o ponto manual
        </p>
        <h1 className="text-3xl sm:text-[40px] leading-10 md:leading-[60px] pt-3 max-w-[520px] font-bold">
          Chegou a nova realidade para{" "}
          <span className="text-secundary-700">Controle de Pontos</span>
        </h1>
        <p className="pt-4 pb-8 max-w-[42ch] font-medium">
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma
          fácil e rápida, possuindo também uma Dashboard intuitiva.
        </p>

        <div className="flex gap-4 relative star-home">
          <NavItem href="#planos" text="Assinar agora" styleButton="landing" />

          <NavItem
            href="#planos"
            text="Ver planos"
            styleButton="landing-secundary"
          />
        </div>
      </div>

      <div className="-mt-20">
        <img
          src={HomeImage}
          className="max-w-sm w-[90%] lg:max-w-[700px] "
          alt=""
        />
      </div>
    </section>
  );
}
