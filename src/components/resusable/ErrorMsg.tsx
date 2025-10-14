interface IProps {
  msg: string;
}

const ErrorMsg = ({ msg }: IProps) => {
  return (
    <>
      {msg && (
        <p className="text-red-800 font-semibold text-sm mt-0.5 px-1">{msg}</p>
      )}
    </>
  );
};

export default ErrorMsg;
