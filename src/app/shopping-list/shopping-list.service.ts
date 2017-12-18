import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor(private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {}

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    // ingredients.forEach(ingredient => {
    //   this.addIngredient(ingredient);
    // });
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
