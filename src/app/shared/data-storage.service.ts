import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {

  }

  storeRecipes() {
    const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ');
    // return this.httpClient.put(
    //   'https://ng-recipe-book-ac18b.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: 'body',
    //     // headers: headers
    //     params: new HttpParams().set('auth', token)
    //   }
    // );
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-ac18b.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true,
      params: new HttpParams().set('auth', token)
    });
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-ac18b.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-ac18b.firebaseio.com/recipes.json', {
      observe: 'body', responseType: 'json', params: new HttpParams().set('auth', token)
    })
      .map((recipes) => {
        console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe[ 'ingredients' ]) {
            recipe[ 'ingredients' ] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
