import { Link } from "react-router-dom";
import classNames from "classnames";

export function Button(props: {
  text: string;
  type: "primary" | "secundary" | "tertiary";
}) {
  return (
    <Link
      to="/"
      className={classNames("py-3 px-9 text-sm rounded-md", {
        "bg-white text-principal-900": props.type === "primary",
        "bg-secundary-700 text-white": props.type === "secundary",
        "border border-white text-white": props.type === "tertiary",
      })}
    >
      {props.text}
    </Link>
  );
}
