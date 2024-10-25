import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  id!: number;
  name!: string;
  description!: string;
  ingredients!: string;
  steps!: string;

  getRecipes() {
    this.supabase.from('recipes').select('*');
    // MAKE IT SO I SAVE THE DATA FOR THE CURRENT OBJECT!
  }
}
