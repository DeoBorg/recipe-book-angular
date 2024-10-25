import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async fetchTableData(table: string) {
    const { data, error } = await this.supabase.from(table).select('*');
    if (error) {
      console.error('Error fetching data:', error.message);
    } else {
      console.log('Data:', data);
    }
  }
}
