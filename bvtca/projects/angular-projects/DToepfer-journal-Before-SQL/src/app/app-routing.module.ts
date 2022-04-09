import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JournalDetailComponent } from "./journals/journal-list/journal-detail/journal-detail.component";
import { JournalEditComponent } from "./journals/journal-edit/journal-edit.component";

import { JournalsComponent } from "./journals/journals.component";
import { LoginComponent } from "./login/login.component";



const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: "full"},
    { path: 'login', component: LoginComponent},
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