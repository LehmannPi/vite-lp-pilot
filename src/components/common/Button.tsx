type ButtonType = { message: string; onClickFn?: () => {} };

export const Button = ({ message, onClickFn }: ButtonType) => {
  return (
    <>
      <button onClick={onClickFn}>{message}</button>
    </>
  );
};
