import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    PizzaDetailsComponent,
    IngredientsListComponent,
    StarRatingComponent,
    CommentSectionComponent,
  ],
  imports: [BrowserModule,
    NavBarComponent,
    SearchBarComponent,
    PizzaDetailsComponent,
    IngredientsListComponent,
    StarRatingComponent,
    CommentSectionComponent,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
