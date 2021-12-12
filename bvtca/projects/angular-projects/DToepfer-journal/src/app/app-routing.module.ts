import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JournalEditComponent } from "./main-page/journals/journal-edit/journal-edit.component";
import { JournalItemComponent } from "./main-page/journals/journal-list/journal-item/journal-item.component";
import { JournalListComponent } from "./main-page/journals/journal-list/journal-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/journal', pathMatch: "full"},
    {path: 'journal', component: JournalListComponent, children: [
        {path: 'new', component: JournalEditComponent},
        {path: ':id', component: JournalItemComponent},
        {path: ':id/edit', component: JournalEditComponent }

    ]},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}