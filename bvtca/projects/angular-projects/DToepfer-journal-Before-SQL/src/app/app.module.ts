import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { JournalListComponent } from './journals/journal-list/journal-list.component';
import { JournalEditComponent } from './journals/journal-edit/journal-edit.component';
import { JournalItemComponent } from './journals/journal-list/journal-item/journal-item.component';
import { AppRoutingModule } from './app-routing.module';
import { JournalDetailComponent } from './journals/journal-list/journal-detail/journal-detail.component';
import { JournalsComponent } from './journals/journals.component';



import { JournalService } from './journals/journal.service';
import { DataService } from './journals/data.service';

import { ShortenPipe } from '../shorten.pipe';
import { ShortenDatePipe } from 'src/shorten-date.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JournalListComponent,
    JournalEditComponent,
    JournalItemComponent,
    JournalDetailComponent,
    JournalsComponent,
    ShortenPipe,
    ShortenDatePipe,
    

    
    
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
    HttpClientModule,
    
  ],

  exports:[
    
  ],
  providers: [HttpClient, JournalService, DataService],
  bootstrap: [AppComponent],

  
})

export class AppModule { }
