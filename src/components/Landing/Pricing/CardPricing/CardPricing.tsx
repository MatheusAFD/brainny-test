import { Button } from "../../Button/Button";
import { Check, X } from "phosphor-react";

interface CardPricingProps {
  type: string;
  price: number;
  colaborators: string | number;
  advantages: number;
  className: string;
  current: number;
  showButton: boolean;
}

export function CardPricing(props: CardPricingProps) {
  return (
    <>
      <div
        className={`flex flex-col items-center text-white border border-[#8A53FF] rounded-[10px] backdrop-blur-[2.5px] ${props.className}`}
      >
        <p className="text-xl mt-10">Plano {props.type}</p>
        <h2 className="text-5xl font-extrabold mt-5">R$ {props.price}</h2>
        <span className="text-secundary-700 font-light mt-2">
          {props.colaborators === "unlimited" ? (
            <>Acessos ilimitados</>
          ) : (
            <>Uso de {props.colaborators} colaboradores</>
          )}
        </span>

        {props.advantages === 3 && (
          <>
            <div className="flex flex-col gap-4 mt-5">
              <div className="flex items-center gap-3">
                <Check size={18} />
                <span>Àrea de meus registros</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} />
                <span>Acesso de {props.colaborators} colaboradores</span>
              </div>

              <div className="flex items-center gap-3  text-white opacity-30">
                <X size={18} />
                <span>Suporte exclusivo</span>
              </div>
              <div className="flex items-center gap-3 cl text-white opacity-30">
                <X size={18} />
                <span>Email corportativo</span>
              </div>
            </div>
          </>
        )}

        {props.advantages === 4 && (
          <>
            <div className="flex flex-col gap-4 mt-5">
              <div className="flex items-center gap-3">
                <Check size={18} />
                <span>Àrea de meus registros</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} />
                <span>Acesso de {props.colaborators} colaboradores</span>
              </div>

              <div className="flex items-center gap-3 ">
                <Check size={18} />
                <span>Suporte exclusivo</span>
              </div>
              <div className="flex items-center gap-3  text-white opacity-30">
                <X size={18} />
                <span>Email corportativo</span>
              </div>
            </div>
          </>
        )}

        {props.advantages === 5 && (
          <>
            <div className="flex flex-col gap-4 mt-5">
              <div className="flex items-center gap-3">
                <Check size={18} />
                <span>Àrea de meus registros</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={18} />
                <span>Acesso ilimitados</span>
              </div>

              <div className="flex items-center gap-3 ">
                <Check size={18} />
                <span>Suporte exclusivo</span>
              </div>
              <div className="flex items-center gap-3 ">
                <Check size={18} />
                <span>Email corportativo</span>
              </div>
            </div>
          </>
        )}

        {props.showButton && (
          <div className="mt-[30px]">
            <Button type="secundary" text="Assinar agora" />
          </div>
        )}
      </div>
    </>
  );
}
