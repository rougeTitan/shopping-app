import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  //reciving single recipe from recipe list
  @Input() recipe: Recipe;
  @Input() index: number;
  //creating event emitter to emit the recipe
  
  //code refactoring - using services and implimenting cross componenet communications
  //@Output()recipeSelected = new EventEmitter<void>();

  //instanciating the service
  //constructor(private recipeService: RecipeService) { }

  ngOnInit(){
  }
  
 

}
