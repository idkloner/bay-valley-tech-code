import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";


@Injectable({providedIn: 'root'})       // because we are injecting a service into a service, ie HTTP service into here
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http
        .put(
            'https://udemy-project-f7941-default-rtdb.firebaseio.com/recipes.json'
            , recipes)    //put opverrides any existing data, also does not create cryptic key, assumes useres defined ID
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
        return this.http
        .get<Recipe[]>(
            'https://udemy-project-f7941-default-rtdb.firebaseio.com/recipes.json'
        )
        .pipe(
            map(recipes => {
            return recipes.map(recipe => {      //this map is on an array so it is different its an array method not object
                return {
                  ...recipe, 
                  ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });           
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
        )
    }   
}