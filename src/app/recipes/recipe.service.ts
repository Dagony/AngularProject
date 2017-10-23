import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/images/67076.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'http://images.media-allrecipes.com/images/67076.jpg')
  ];


  getRecipes() {
    return this.recipes.slice(); // return copy of array of recipes
  }

}
