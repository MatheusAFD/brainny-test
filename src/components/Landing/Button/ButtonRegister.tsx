import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  styleButton:
    | "primary"
    | "secundary"
    | "tertiary"
    | "landing"
    | "landing-secundary";
  size: "md" | "lg";
  resposive?: boolean;
}

export function ButtonRegister(props: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={classNames(
        "min-h-[50px] text-sm rounded-md flex items-center justify-center cursor-pointer disabled:opacity-60",
        {
          "bg-principal-900 text-white": props.styleButton === "secundary",
          "bg-secundary-700 text-white": props.styleButton === "landing",
          " text-white border border-white":
            props.styleButton === "landing-secundary",
          " bg-white text-principal-900 border border-principal-900 mt-[10px]":
            props.styleButton === "primary",
          "w-[160px]": props.size === "md",
          "w-[200px]": props.size === "lg",
          "hidden md:block": props.resposive === true,
        }
      )}
    >
      {props.text}
    </button>
  );
}
