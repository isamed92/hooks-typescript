export interface DrinkResponse {
  drinks: Drink[];
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
}
