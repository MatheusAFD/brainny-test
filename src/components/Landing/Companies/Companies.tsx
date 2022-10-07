import amoPet from "../../../assets/img/companies/amoPet.png";
import brainny from "../../../assets/img/companies/brainny.png";
import bus from "../../../assets/img/companies/bus.png";
import goStudy from "../../../assets/img/companies/goStudy.png";

export function Companies() {
  return (
    <section className="">
      <div className="smokeOne "></div>

      <div className="container flex pt-20 flex-wrap gap-8 items-center justify-center sm:justify-evenly">
        {[brainny, amoPet, bus, goStudy].map((src, id) => {
          return (
            <img
              key={id}
              src={src}
              alt={`${src} image`}
              className="z-30 place-self-center"
            />
          );
        })}
      </div>
    </section>
  );
}
