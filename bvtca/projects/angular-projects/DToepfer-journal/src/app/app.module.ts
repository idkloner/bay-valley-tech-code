import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './login/users/users.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { JournalListComponent } from './main-page/journals/journal-list/journal-list.component';
import { JournalEditComponent } from './main-page/journals/journal-edit/journal-edit.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { JournalItemComponent } from './main-page/journals/journal-list/journal-item/journal-item.component';
import  {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { AppRoutingModule } from './app-routing.module';
import { JournalDetailComponent } from './main-page/journals/journal-detail/journal-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    MainPageComponent,
    HeaderComponent,
    JournalListComponent,
    JournalEditComponent,
    JournalItemComponent,
    JournalDetailComponent,

    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule, 
    AppRoutingModule 
    
  ],

  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})

export class AppModule { }
