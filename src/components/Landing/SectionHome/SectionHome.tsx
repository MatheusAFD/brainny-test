import { Button } from "../Button/Button";

import HomeImage from "../../../assets/img/homeImage.png";

export function SectionHome() {
  return (
    <section className="flex justify-between container pt-32 text-white relative z-30">
      <div className="max-w-[50%] blur-effect">
        <p className="text-2xl tracking-[0.165em] uppercase font-light">
          Esquece o ponto manual
        </p>
        <h1 className="text-[40px] leading-[60px] pt-3 max-w-[520px] font-bold">
          Chegou a nova realidade para{" "}
          <span className="text-secundary-700">Controle de Pontos</span>
        </h1>
        <p className="pt-4 pb-8 max-w-[42ch] font-medium">
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma
          fácil e rápida, possuindo também uma Dashboard intuitiva.
        </p>

        <div className="flex gap-4">
          <Button to="" text="Assinar agora" type="secundary" />
          <Button to="" text="Ver planos" type="tertiary" />
        </div>
      </div>

      <div className="-mt-20 ">
        <img src={HomeImage} className="max-w-[700px]" alt="" />
      </div>
    </section>
  );
}
