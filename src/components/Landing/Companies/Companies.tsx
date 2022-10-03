import amoPet from "../../../assets/img/companies/amoPet.png";
import brainny from "../../../assets/img/companies/brainny.png";
import bus from "../../../assets/img/companies/bus.png";
import goStudy from "../../../assets/img/companies/goStudy.png";

export function Companies() {
  return (
    <section className="container flex justify-evenly items-center ">
      <div className="smokeOne"></div>
      {[brainny, amoPet, bus, goStudy].map((src) => {
        return <img src={src} alt={`${src} image`} className="z-30" />;
      })}
    </section>
  );
}
