import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JournalEntryComponent } from "./main-page/journal-entry/journal-entry.component";
import { JournalListComponent } from "./main-page/journal-list/journal-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/journal-list', pathMatch: "full"},
    {path: 'journal-list', component: JournalListComponent},
    {path: 'journal-add', component: JournalEntryComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}