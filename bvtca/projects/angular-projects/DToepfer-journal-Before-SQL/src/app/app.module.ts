import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './login/users/users.component';
import { JournalListComponent } from './journals/journal-list/journal-list.component';
import { JournalEditComponent } from './journals/journal-edit/journal-edit.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { JournalItemComponent } from './journals/journal-list/journal-item/journal-item.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { AppRoutingModule } from './app-routing.module';
import { JournalDetailComponent } from './journals/journal-list/journal-detail/journal-detail.component';
import { JournalsComponent } from './journals/journals.component';
import { JournalStartComponent } from './journals/journal-start/journal-start-component';


import { JournalService } from './journals/journal.service';
import { DataService } from './journals/data.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from '../shorten.pipe';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ShortenDatePipe } from 'src/shorten-date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    JournalListComponent,
    JournalEditComponent,
    JournalItemComponent,
    JournalDetailComponent,
    JournalStartComponent,
    JournalsComponent,
    ShortenPipe,
    ShortenDatePipe

    
    
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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  exports:[
    
  ],
  providers: [HttpClient, JournalService, DataService],
  bootstrap: [AppComponent],

  
})

export class AppModule { }
