import { ChangeEvent, FC, useEffect, useState } from 'react';

interface BodyProps {
  name: string;
  age: number;
}

const Body: FC<BodyProps> = ({ name, age }) => {
  const [data, setData] = useState();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  //www.thecocktaildb.com/api/json/v1/1/random.php

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'www.thecocktaildb.com/api/json/v1/1/random.php'
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  /* To-do:
  1) obtener y mostrar el objeto que obtenemos desde el endpoint
  2) darle tipo al objeto
  3) mostrar los datos del objeto
  */

  console.log('data::::::::::', data);

  return (
    <div>
      <h1>
        Hola mundo, soy {name}! tengo {age} años
      </h1>
      <input type='text' onChange={handleChange} />
      {JSON.stringify(data)}
    </div>
  );
};

export default Body;
