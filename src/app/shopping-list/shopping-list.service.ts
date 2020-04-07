import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs';
//import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  //adding the event emitter to emit the event of adding a new ingredient

  //we are using subject so we no longer needed eventemitter amd corrosponding imports
  //ingredientsChanged = new EventEmitter<Ingredient[]>();
  
  //subject creation
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //to use subject we need to replace emit with next
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);

     //to use subject we need to replace emit with next
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    //emitting the updated ingredients
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
