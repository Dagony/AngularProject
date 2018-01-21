import {Actions, Effect} from '@ngrx/effects';
import * as RecipeActions from '../store/recipe.actions';
import {Recipe} from '../recipe.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>('https://ng-recipe-book-ac18b.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })
    })
    .map(
      (recipes) => {
        console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    );

  constructor(private actions$: Actions, private httpClient: HttpClient) {
  }
}
