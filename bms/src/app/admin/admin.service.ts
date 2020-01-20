import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

@Injectable()
export class AdminService implements CanActivate {
  url = "http://localhost:3000/admin";

  constructor(private http: HttpClient, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage["login_status"] == "1") {
      return true;
    }

    this.router.navigate(["/admin-login"]);
    return false;
  }

  loginadmin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    return this.http.post(this.url + "/login", body);
  }
  registerAdmin(name: string, email: string, phone: String, password: string) {
    const body = {
      name: name,
      email: email,
      phone: phone,
      password: password
    };
    return this.http.post(this.url + "/register", body);
  }

  resetpassUser(email: String, password: String) {
    const body = {
      email: email,
      password: password
    };

    return this.http.post(this.url + "/resetpassword", body);
  }

  getmenu() {
    return this.http.get(this.url + "/menu");
  }

  getUser() {
    return this.http.get(this.url);
  }
}
