import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Books } from "./books.model";
@Injectable({
  providedIn: "root",
})
export class BooksService {
  books: Books[];
  selectedBooks: Books = {
    _id: "",
    name: "",
    author: "",
    bookno: null,
    noofpages: null,
    edition: null,
    publishedby: "",
    quantity: null,
  };

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  constructor(private http: HttpClient) {}

  //HttpMethods
  readonly baseURL = "http://localhost:3000/api/deleteBook";
  readonly baseURL1 = "http://localhost:3000/api/update";

  postBooks(books: Books) {
    return this.http.post(
      environment.apiBaseUrl + "/bregister",
      books,
      this.noAuthHeader
    );
  }

  getBooksProfile() {
    return this.http.get(environment.apiBaseUrl + "/booksProfile");
  }

  updatebooks(b: Books) {
    return this.http.put(this.baseURL1 + `/${b._id}`, b);
  }

  deleteBook(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
