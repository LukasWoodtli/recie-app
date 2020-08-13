import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'Test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Test Recipe 2', 'Test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(rec: Recipe): void {
    this.recipeWasSelected.emit(rec);
  }
}
