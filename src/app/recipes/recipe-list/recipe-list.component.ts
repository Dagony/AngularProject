import {Component, EventEmitter, Output} from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [
    './recipe-list.component.css'
  ]
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/images/67076.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'http://images.media-allrecipes.com/images/67076.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
