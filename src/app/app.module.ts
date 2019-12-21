import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { FilterPipe } from './pipes/filter.pipe';

import { ReactiveFormsModule }   from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PersonViewComponent,
    PersonAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MyModule {}