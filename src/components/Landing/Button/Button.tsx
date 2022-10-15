import { Link } from "react-router-dom";
import classNames from "classnames";

export function Button(props: {
  text: string;
  type: "primary" | "secundary" | "tertiary";
  to: string | "";
}) {
  return (
    <Link
      to={props.to}
      className={classNames(
        "min-h-[50px] min-w-[160px] text-sm rounded-md flex items-center justify-center transition-colors hover:brightness-90  ",
        {
          "bg-white text-principal-900": props.type === "primary",
          "bg-secundary-700 text-white": props.type === "secundary",
          "border border-white text-white": props.type === "tertiary",
        }
      )}
    >
      {props.text}
    </Link>
  );
}
