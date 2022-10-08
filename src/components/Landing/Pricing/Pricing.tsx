import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import classNames from "classnames";

import { ArrowLeft, ArrowRight } from "phosphor-react";
import { CardPricing } from "./CardPricing/CardPricing";
import { PricingData } from "../../../utils/DataPricing";
import "keen-slider/keen-slider.min.css";

export function Pricing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },

    breakpoints: {
      "(min-width: 450px)": {
        slides: { perView: 1 },
      },
      "(min-width: 1025px)": {
        slides: { perView: 2, spacing: -20, origin: "center" },
      },
      "(min-width: 1290px)": {
        slides: { perView: 3, spacing: -20, origin: "center" },
      },
    },

    slides: { perView: 1, origin: "center" },
  });

  return (
    <section className="p-4 sm:p-0 container flex flex-col justify-center items-center relative star-companies">
      <h2 className="text-4xl mt-24 font-extrabold text-white leading-[60px] relative star-pricing  ">
        Encontre o plano perfeito
      </h2>
      <p className=" text-white/75 max-w-[53ch] text-center leading-8 ">
        Escolha o plano que melhor se encaixa na sua empresa e faça sua
        assinatura, dentro de 72h iremos liberar seus acessos.
      </p>
      <div
        className="p-6 before:blur-[150px] 
        before:rounded-full before:bg-secundary-700/90 before:absolute before:w-[20%] before:right-0 before:h-[200px] before:top-54"
      ></div>
      <div className="container grid grid-cols-[32px_auto_auto] justify-center items-center">
        <ArrowLeft
          size={20}
          color="#ffffff"
          weight="bold"
          className="-mr-20 cursor-pointer z-50"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        />

        <div
          ref={ref}
          className="mt-6 m-auto max-w-[90%] sm:max-w-[350px] md:max-w-[750px] xl:max-w-[960px] flex gap-y-10 keen-slider z-0 items-center mb-20 md:mb-28"
        >
          {Object.entries(PricingData).map(([key, value]) => {
            return (
              <CardPricing
                key={key}
                price={value.price}
                colaborators={value.colaborators}
                type={value.title}
                advantages={value.advantages}
                showButton={value.current === currentSlide ? true : false}
                current={value.current}
                className={classNames("keen-slider__slide slide-content", {
                  "!bg-[#8A53FF]/10 backdrop-blur-[2.5px] !h-[491px]":
                    value.current === currentSlide,
                  "opacity-30    !h-[411px]  ": value.current !== currentSlide,
                })}
              />
            );
          })}
        </div>

        <ArrowRight
          size={20}
          weight="bold"
          className="-ml-3 sm:ml-4 z-50 cursor-pointer text-white relative"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </div>
    </section>
  );
}
