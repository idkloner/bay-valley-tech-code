import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'a test food', 
            'this is a test',
         'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_tbCqVl2yqf8%2FSwC8Hfs63kI%2FAAAAAAAABP4%2FHb01mzs9GEU%2Fs1600%2FBeef%2BEmpanadas%2B003-1.jpg&f=1&nofb=1',
         [
             new Ingredient('Meat', 1),
             new Ingredient('fries', 23)
         ]),
         new Recipe(
             'another test recipe', 
             'this is a test',
         'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_tbCqVl2yqf8%2FSwC8Hfs63kI%2FAAAAAAAABP4%2FHb01mzs9GEU%2Fs1600%2FBeef%2BEmpanadas%2B003-1.jpg&f=1&nofb=1',
         [
             new Ingredient('bun', 2),
             new Ingredient('patty', 3)
         ])
      ];

      constructor(private slService: ShoppingListService){      }
      getRecipes(){
          return this.recipes.slice();  //slice will return an exact copy of the array on the file.
      }

      addIngredientstoShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);

      }
}