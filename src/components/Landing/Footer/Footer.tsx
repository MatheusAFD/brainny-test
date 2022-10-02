import facebook from "../../../assets/img/facebook.png";
import linkedin from "../../../assets/img/linkedin.png";
import instagram from "../../../assets/img/instagram.png";

export function Footer() {
  return (
    <footer className=" text-white">
      <div className="flex justify-center gap-16   py-5 border-[0.5px] border-secundary-700 border-l-0 border-r-0">
        <div className="">
          <p className="font-bold text-xl">@pontoago</p>
          <span className="font-light">Se conecta com a gente</span>
        </div>
        <div className="flex gap-10">
          {[instagram, facebook, linkedin].map((src) => {
            return <img src={src} alt={`${src} image`} />;
          })}
        </div>
      </div>
      <p className="text-center pt-16 pb-14">
        PontoGo - Todos direitos reservados
      </p>
    </footer>
  );
}
