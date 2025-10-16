import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColors = ({ color, ...rest }: IProps) => {
  return (
    <>
      <span
        style={{ backgroundColor: color }}
        className={`block w-5 h-5 rounded-full cursor-pointer`}
        {...rest}
      ></span>
    </>
  );
};

export default CircleColors;
