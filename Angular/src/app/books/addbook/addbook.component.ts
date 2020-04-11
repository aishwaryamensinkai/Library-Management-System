import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { BooksService } from "../../shared/books.service";
import { Books } from "../../shared/books.model";

declare var M: any;
@Component({
  selector: "app-addbook",
  templateUrl: "./addbook.component.html",
  styleUrls: ["./addbook.component.css"],
})
export class AddbookComponent implements OnInit {
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
    this.booksService.postBooks(form.value).subscribe(
      (res) => {
        this.showSucessMessage = true;
        setTimeout(() => (this.showSucessMessage = false), 10000);
        this.resetForm(form);
      },
      (err) => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join("<br/>");
        } else this.serverErrorMessages = "Something went wrong.";
      }
    );
  }

  resetForm(form: NgForm) {
    this.booksService.selectedBooks = {
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

  // onEdit(b) {}

  // onDelete(_id: string, form: NgForm) {
  //   if (confirm("Are you sure to delete this record ?") == true) {
  //     this.booksService.deleteBook(_id).subscribe((res) => {
  //       this.refreshBooksList();
  //       this.resetForm(form);
  //       M.toast({ html: "Deleted successfully", classes: "rounded" });
  //     });
  //   }
  // }
}
