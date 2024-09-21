import { useEffect, useState } from 'react';
import { Drink, DrinkResponse } from '../interfaces/responses';

export const DrinkBody = () => {
  const [drink, setDrink] = useState<Drink>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        );
        const data: DrinkResponse = await response.json();
        const drink: Drink = data.drinks[0];
        setDrink(drink);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='animate__animated animate__fadeIn'>
          <h2 className='animate__animated animate__fadeIn'>
            {drink?.strDrink} 🍹 (strDrink)
          </h2>
          <img
            src={drink?.strDrinkThumb}
            alt={drink?.strDrink}
            style={{ width: '300px', borderRadius: '10px' }}
          />
          <p style={{ marginTop: -10 }}>(src = strDrinkThumb)</p>
          {drink?.strAlcoholic === 'Alcoholic' ? (
            <>
              <span style={{ color: 'red', fontSize: '20px' }}>Alcoholic</span>
              <span> (strAlcoholic)</span>
            </>
          ) : (
            <>
              <span style={{ color: 'green', fontSize: '20px' }}>
                Non-alcoholic
              </span>
              <span> (strAlcoholic)</span>
            </>
          )}
          <p style={{ width: '300px' }}>{drink?.strInstructions}</p>
          <p> (strInstructions)</p>
        </div>
      )}
    </>
  );
};
