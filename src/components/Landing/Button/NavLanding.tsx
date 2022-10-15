import { AnchorHTMLAttributes } from "react";
import classNames from "classnames";
interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  styleButton: "landing" | "landing-secundary";
}

export function NavItem(props: ButtonProps) {
  return (
    <a
      {...props}
      className={classNames(
        "min-h-[50px] w-[160px] z-50 text-sm rounded-md flex items-center justify-center disabled:opacity-60 hover:brightness-125 transition-colors",
        {
          "bg-secundary-700 text-white": props.styleButton === "landing",
          "text-white border border-white hover:white hover:bg-purple-700":
            props.styleButton === "landing-secundary",
        }
      )}
    >
      {props.text}
    </a>
  );
}
