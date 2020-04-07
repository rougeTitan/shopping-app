import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  //adding dummy data for shopping list display
  ingredients: Ingredient[];

  //assigning subscription to a variable. Make sure you have added import
  private igChangeSub: Subscription;
  
  constructor(private slService: ShoppingListService,
    private loggingService: LoggingService) { }
  
  // you must initialize all the initialization within ngOnInit()
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged
    // assigning change in ingridient to the current ingredient
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
      this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  //unsubscribe subject once you leave the component
  ngOnDestroy():void{
    this.igChangeSub.unsubscribe();
  }
}
