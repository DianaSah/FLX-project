import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { AddUserRecipeService } from './add-user-recipe.service';


@Injectable({
  providedIn: 'root'
})
export class RecipesFbService {

  constructor(
    public dataBase: AngularFirestore,
    public addUserRecipeService: AddUserRecipeService
    ) {}

  addRecipe(value: any){
    let ingredients=value.ingredients;
    let ingredientsArray = ingredients.split(', ');
    let steps = value.steps;
    let stepsArray = steps.split('. ');
    let service =  this.addUserRecipeService;
    return this.dataBase.collection('recipes').add({
      title: value.title,
      imageSrc: value.imageSrc,
      description: value.description,
      cuisineType: value.cuisineType,
      rating: 0,
      isFavorite: false,
      cookDuration: parseInt(value.cookDuration),
      ingredients: ingredientsArray,
      steps: stepsArray,
      //videos: value.videos,
    }).then(docRef => {
      docRef.get().then(function(doc) {
        this.afs.doc(`recipes/${this.recipeId}`)
          .ref.get().then((doc) => {

        });
        service.addUserRecipe(doc.data(), doc.id)
    })
  });
  }
}
