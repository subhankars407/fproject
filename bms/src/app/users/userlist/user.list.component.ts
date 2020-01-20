import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-list",
  templateUrl: "./user.list.component.html",
  styleUrls: ["./user.list.component.css"]
})
export class UserListComponent implements OnInit {
  users = [];
  constructor(private userService: UserService) {
    userService.getUser().subscribe(response => {
      if (response["status"] == "success") {
        this.users = response["data"];
        console.log(this.users);
      } else {
        console.log(response["data"]);
      }
    });
  }

  ngOnInit() {}
}
