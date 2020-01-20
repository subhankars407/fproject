import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./adminlogin.component.html",
  styleUrls: ["./adminlogin.component.css"]
})
export class AdminLoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    if (this.email.length == 0) {
      toastr.error("Enter Valid Email");
    } else if (this.password.length == 0) {
      toastr.error("Enter valid Password");
    } else {
      this.adminService
        .loginadmin(this.email, this.password)
        .subscribe(response => {
          if (response["status"] == "success") {
            toastr.success("Welcome!!");
            sessionStorage["login_status"] = "1";
            sessionStorage["id"] = response["data"]["id"];
            sessionStorage["name"] = response["data"]["name"];
            this.router.navigate(["/app-user-list"]);
          } else {
            toastr.error(response["error"]);
          }
        });
    }
  }
}
