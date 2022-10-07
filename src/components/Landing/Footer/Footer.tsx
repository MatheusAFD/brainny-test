import facebook from "../../../assets/img/facebook.png";
import linkedin from "../../../assets/img/linkedin.png";
import instagram from "../../../assets/img/instagram.png";

export function Footer() {
  return (
    <footer className="text-white relative star-footer ">
      <div className="relative star-footer-left"></div>
      <div
        className="absolute -top-[410px] right-0 z-0 bg-smokeTwo bg-cover bg-no-repeat 
        h-[560px] w-[410px] opacity-70 mix-blend-hard-light "
      ></div>
      <div className="flex justify-center gap-16 py-5 border-[0.5px] border-secundary-700 border-l-0 border-r-0 p-4">
        <div>
          <p className="font-bold text-xl">@pontogo</p>
          <span className="font-light">Se conecta com a gente</span>
        </div>

        <div className="flex gap-5 md:gap-10 flex-wrap ">
          {[instagram, facebook, linkedin].map((src, id) => {
            return (
              <img
                key={id}
                src={src}
                alt={`${src} image`}
                className=" w-8 h-8 md:h-14 md:w-14"
              />
            );
          })}
        </div>
      </div>
      <p className="text-center pt-20 pb-24 flex items-center justify-between gap-4">
        <span className="w-[calc(50%-190px)] h-[0.5px] bg-secundary-700/40 block" />
        PontoGo - Todos direitos reservados
        <span className="w-[calc(50%-190px)] h-[0.5px] bg-secundary-700/40 block" />
      </p>
    </footer>
  );
}
