import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './login/users/users.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { JournalListComponent } from './main-page/journal-list/journal-list.component';
import { JournalEntryComponent } from './main-page/journal-entry/journal-entry.component';
import { QuickNotesComponent } from './main-page/quick-notes/quick-notes.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { JournalItemComponent } from './main-page/journal-list/journal-item/journal-item.component';
import  {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    MainPageComponent,
    HeaderComponent,
    JournalListComponent,
    JournalEntryComponent,
    QuickNotesComponent,
    JournalItemComponent,
    
    
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
    
  ],

  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})

export class AppModule { }
