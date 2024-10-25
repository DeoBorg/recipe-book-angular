import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { RecipeListComponentComponent } from './app/recipe-list-component/recipe-list-component.component';

bootstrapApplication(RecipeListComponentComponent, appConfig)
  .catch((err) => console.error(err));
