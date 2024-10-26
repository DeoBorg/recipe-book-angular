import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-recipe-list-component',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list-component.component.html',
  styleUrl: './recipe-list-component.component.css'
})
export class RecipeListComponentComponent implements OnInit{

  ids: number[] = [];
  names: string[] = [];
  descriptions: string[] = [];
  ingredients: string[] = [];
  steps: string[] = [];

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.loadRecipes();
  }

  async loadRecipes(): Promise<void> {
    const recipes = await this.supabaseService.loadRecipes();
    recipes.forEach(recipe=>{
      this.ids.push(recipe.id);
      this.names.push(recipe.name);
      this.descriptions.push(recipe.description);
      this.ingredients.push(recipe.ingredients);
      this.steps.push(recipe.steps);
    });
  }
}
