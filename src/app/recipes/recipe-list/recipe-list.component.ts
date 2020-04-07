import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//blueprint for the recipe which can create a recipe object on demand
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   //adding recipe array which containts dummy recipe
  recipes: Recipe[];
  subscription: Subscription;

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor( private recipeService: RecipeService,
               private router: Router,
               private route: ActivatedRoute){

  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  this.recipes = this.recipeService.getRecipes();
  }

  //dont need this method
  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }


  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
