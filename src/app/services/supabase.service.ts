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

  async loadRecipes(): Promise<any[]> {
    const { data, error } = await this.supabase
    .from('recipes')
    .select('id, name, description, ingredients, steps');
    if (error) {
      throw error;
    }
    return data || [];
  }
}
