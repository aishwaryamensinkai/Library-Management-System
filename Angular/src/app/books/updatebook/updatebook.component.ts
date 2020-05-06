import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { BooksService } from "../../shared/books.service";
import { Books } from "../../shared/books.model";

declare var M: any;

@Component({
  selector: "app-updatebook",
  templateUrl: "./updatebook.component.html",
  styleUrls: ["./updatebook.component.css"],
})
export class UpdatebookComponent implements OnInit {
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

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.booksService.postBooks(form.value).subscribe(
        (res) => {
          this.showSucessMessage = true;
          setTimeout(() => (this.showSucessMessage = false), 10000);
          this.resetForm(form);
          this.refreshBooksList();
        },
        (err) => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join("<br/>");
          } else this.serverErrorMessages = "Something went wrong.";
        }
      );
    } else {
      this.booksService.updatebooks(form.value).subscribe(
        (res) => {
          this.showSucessMessage = true;
          setTimeout(() => (this.showSucessMessage = false), 10000);
          this.resetForm(form);
          this.refreshBooksList();
        },
        (err) => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join("<br/>");
          } else this.serverErrorMessages = "Something went wrong.";
        }
      );
    }
  }

  onEdit(b: Books) {
    this.booksService.selectedBooks = b;
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
    this.router.navigate(["/function"]);
  }
}
