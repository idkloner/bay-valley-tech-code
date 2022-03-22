import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JournalDetailComponent } from "./journals/journal-list/journal-detail/journal-detail.component";
import { JournalEditComponent } from "./journals/journal-edit/journal-edit.component";
// import { JournalStartComponent } from "./journals/journal-start/journal-start-component";
import { JournalsComponent } from "./journals/journals.component";




const appRoutes: Routes = [
    { path: '', redirectTo: 'journal', pathMatch: "full"},
    { path: 'journal', component: JournalsComponent, children: [
        // { path: '', component: JournalStartComponent},
        { path: 'new', component: JournalEditComponent},
        { path: ':id', component: JournalDetailComponent},
        { path: ':id/edit', component: JournalEditComponent}
    ] },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}