import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../recipe.service';

import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  public recipe$: Observable<Recipe>;
  favorite: string = 'favorite_border';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRecipe();
    this.getUserRecipe();
    this.handleFavorite();
    // this.recipeService.getRecipe('3JEkryxB0IMVtHXIRW6h').subscribe(val => console.log(val));
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe$ = this.recipeService.getRecipe(id);
  }

  getUserRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe$ = this.recipeService.getUserRecipe(id);
  }

  goBack(): void {
    this.location.back();
  }

  handleFavorite() {

  }

}

