import { NgModule } from "@angular/core";
import { FormControlDirective } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ] },
      //the : makes it dynamic part using id
    { path: 'servers', 
    //canActivate:[AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent, 
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },  // whenever {} is used as a type it means javascript object
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
    //{ path: 'not-found', component: PageNotFoundComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'page not found'} },
    { path: '**', redirectTo:'/not-found'}  //** means catch all routs other than specified above
  ];


@NgModule({ 
    imports: [
        RouterModule.forRoot(appRoutes) // (appRoutes, {useHash: true})  puts hash at end of first part of url, so the host server will only try to server that then let angular worry about the rest. 
    ], 
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{

}

function forRoot(appRoutes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> 
{
    throw new Error("Function not implemented.");
}
