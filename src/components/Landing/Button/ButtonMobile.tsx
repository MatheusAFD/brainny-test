import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleButton: "primary" | "secundary";
  text: string;
  ref?: any;
}

export function ButtonMobile(props: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        "p4  font-bold w-[105px] h-10 rounded-lg disabled:opacity-50",
        {
          "bg-[#219653] text-white": props.styleButton === "primary",
          " border border-[#219653] text-[#219653]":
            props.styleButton === "secundary",
        }
      )}
    >
      {props.text}
    </button>
  );
}
