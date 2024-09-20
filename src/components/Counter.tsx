import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const add = () => {
    setValue(value + 1);
  };

  const substract = () => {
    setValue(value - 1);
  };

  return (
    <>
      <p>Valor actual: {value}</p>
      <button onClick={add}>incrementar</button>
      <button onClick={substract}>decrementar</button>
    </>
  );
};

export default Counter;
