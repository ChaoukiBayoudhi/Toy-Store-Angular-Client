import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToyListComponent } from './toy-list/toy-list.component';
import { ToyEditComponent } from './toy-edit/toy-edit.component';
import { ToyDeleteComponent } from './toy-delete/toy-delete.component';
import { ToyUpdateComponent } from './toy-update/toy-update.component';
import { ToyFindComponent } from './toy-find/toy-find.component';


@NgModule({
  declarations: [
    AppComponent,
    ToyListComponent,
    ToyEditComponent,
    ToyDeleteComponent,
    ToyUpdateComponent,
    ToyFindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
