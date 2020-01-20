import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./adminregister.component.html",
  styleUrls: ["./adminregister.component.css"]
})
export class AdminRegisterComponent implements OnInit {
  name: "";
  email: "";
  phone: "";
  password: "";

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {}

  onRegister() {
    if (this.name.length == 0) {
      toastr.error("Please Enter Valid Username");
    } else if (this.email.length == 0) {
      toastr.error("Plese Enter valid email ");
    } else if (this.password.length == 0) {
      toastr.error("Plese Enter valid email ");
    } else {
      this.adminService
        .registerAdmin(this.name, this.email, this.phone, this.password)
        .subscribe(response => {
          if (response["status"] == "success") {
            toastr.success("Admin Registered successfully!!");
            this.router.navigate["/login-page"];
          } else {
            toastr.error(response["error"]);
          }
        });
    }
  }
}
