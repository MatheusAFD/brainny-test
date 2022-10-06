import { Link } from "react-router-dom";
import classNames from "classnames";

export function ButtonRegister(props: {
  text: string;
  type: "primary" | "secundary" | "tertiary";
  onClick?: () => void;
}) {
  return (
    <input
      onClick={props.onClick}
      type="button"
      value={props.text}
      className={classNames(
        "min-h-[50px] min-w-[200px] text-sm rounded-md flex items-center justify-center cursor-pointer",
        {
          "bg-principal-900 text-white": props.type === "secundary",
          "bg-white text-principal-900": props.type === "primary",
        }
      )}
    />
  );
}
