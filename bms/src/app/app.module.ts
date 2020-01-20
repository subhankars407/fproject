import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes, Route } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./users/login/login.component";
import { UserListComponent } from "./users/userlist/user.list.component";
import { UserService } from "./users/user.service";
import { RegisterComponent } from "./users/register/register.component";
import { SeparatorBarComponent } from "./distinct/distinct.component";
import { AdminService } from "./admin/admin.service";
import { AdminLoginComponent } from "./admin/login/adminlogin.component";
import { AdminRegisterComponent } from "./admin/register/adminregister.component";

const routes: Route[] = [
  { path: "user-login", component: LoginComponent },
  { path: "user-registration", component: RegisterComponent },
  { path: "admin-user", component: SeparatorBarComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "admin-register", component: AdminRegisterComponent },
  { path: "app-user-list", component: UserListComponent },
  { path: "", component: SeparatorBarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SeparatorBarComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {}
