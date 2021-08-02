import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeComponent } from './recipe/recipe.component';
import { ContainerComponent } from './ui/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
