import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BooksService } from "../shared/books.service";
import { Books } from "../shared/books.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-viewbooksinstudents",
  templateUrl: "./viewbooksinstudents.component.html",
  styleUrls: ["./viewbooksinstudents.component.css"],
})
export class ViewbooksinstudentsComponent implements OnInit {
  booksDetails;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(public booksService: BooksService, private router: Router) {}

  ngOnInit() {
    this.refreshBooksList();
  }

  refreshBooksList() {
    this.booksService.getBooksProfile().subscribe((res) => {
      this.booksService.books = res as Books[];
    });
  }
  resetForm(form: NgForm) {
    this.booksService.selectedBooks = {
      _id: "",
      name: "",
      author: "",
      bookno: null,
      noofpages: null,
      edition: null,
      publishedby: "",
      quantity: null,
    };
    form.resetForm();
    this.serverErrorMessages = "";
  }
  Back() {
    this.router.navigate(["./insidestudent"]);
  }
}
