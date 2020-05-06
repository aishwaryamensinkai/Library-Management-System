import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Books } from "../../shared/books.model";
import { BooksService } from "../../shared/books.service";

declare var M: any;

@Component({
  selector: "app-deletebook",
  templateUrl: "./deletebook.component.html",
  styleUrls: ["./deletebook.component.css"],
})
export class DeletebookComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public booksService: BooksService, private router: Router) {}

  // ngOnInit(){

  // }
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

  onDelete(_id: string, form: NgForm) {
    if (confirm("Are you sure to delete this record ?") == true) {
      this.booksService.deleteBook(_id).subscribe((res) => {
        this.refreshBooksList();
        // this.resetForm(form);
        M.toast({ html: "Deleted successfully", classes: "rounded" });
      });
    }
  }

  Back() {
    this.router.navigate(["/function"]);
  }
}
