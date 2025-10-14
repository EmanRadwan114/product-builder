import type { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="border-1 border-gray-300 px-2.5 py-1 rounded-sm focus-visible:outline-zinc-600 shadow-sm"
    />
  );
};

export default Input;
