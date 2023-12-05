import clsx from "clsx";
import { FieldError } from "react-hook-form";

interface IErrorMessage {
  className?: string;
  error: FieldError | undefined;
}
const ErrorMessage = (props: IErrorMessage) => {
  const { className, error } = props;
  return (
    <div className={clsx(className, " whitespace-nowrap text-xs text-red-500")}>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default ErrorMessage;
