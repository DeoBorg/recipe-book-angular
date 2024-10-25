import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-recipe-list-component',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list-component.component.html',
  styleUrl: './recipe-list-component.component.css'
})
export class RecipeListComponentComponent implements OnInit {
  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.supabaseService.fetchTableData('recipes');
  }
}
