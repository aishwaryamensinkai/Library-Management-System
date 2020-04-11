import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  userpage() {
    this.router.navigate(["/ssignup"]);
  }
  viewbooks() {
    this.router.navigate(["/viewbooksinstudents"]);
  }
  updatestudent(){
    this.router.navigate(['/#']);
  }
  back() {
    this.router.navigate(["/firstpage"]);
  }
}
