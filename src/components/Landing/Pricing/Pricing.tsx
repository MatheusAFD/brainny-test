import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { ArrowLeft, ArrowRight } from "phosphor-react";
import { CardPricing } from "./CardPricing/CardPricing";
import { PricingData } from "../../../utils/DataPricing";
import classNames from "classnames";

export function Pricing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
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
    <section className=" container mt-[90px] pb-[100px] pt-[90px]  flex flex-col justify-center items-center ">
      <h2 className="text-4xl font-extrabold text-white leading-[60px]">
        Encontre o plano perfeito
      </h2>
      <p className=" text-white/75 max-w-[53ch] text-center leading-8 ">
        Escolha o plano que melhor se encaixa na sua empresa e faça sua
        assinatura, dentro de 72h iremos liberar seus acessos.
      </p>
      <div className="container grid grid-cols-[16px_auto_16px] justify-center items-center">
        <ArrowLeft
          size={20}
          color="#ffffff"
          weight="bold"
          className="mr-20 cursor-pointer z-50"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        />

        <div
          ref={ref}
          className="mt-[70px] m-auto max-w-[350px] sm:max-w-[350px] md:max-w-[750px]  xl:max-w-[960px]  flex gap-y-10 keen-slider z-0 items-center"
        >
          {Object.entries(PricingData).map(([key, value]) => {
            return (
              <CardPricing
                price={value.price}
                colaborators={value.colaborators}
                type={value.title}
                advantages={value.advantages}
                showButton={value.current === currentSlide ? true : false}
                current={value.current}
                className={classNames("keen-slider__slide slide-content", {
                  "!bg-[#8A53FF]/10 !h-[491px] ":
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
          className="ml-3 cursor-pointer text-white"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </div>
    </section>
  );
}
