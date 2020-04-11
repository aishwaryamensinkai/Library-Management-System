import { Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AuthGuard } from "./auth/auth.guard";
import { FirstPageComponent } from "./first-page/first-page.component";
import { StudentComponent } from "./student/student.component";
import { PageComponent } from "./page/page.component";
import { FunctionComponent } from "./function/function.component";
import { BooksComponent } from "./books/books.component";
import { ViewbooksComponent } from "./viewbooks/viewbooks.component";
import { ViewstudentsComponent } from "./viewstudents/viewstudents.component";
import { ViewbooksinstudentsComponent } from "./viewbooksinstudents/viewbooksinstudents.component";
import { DeletebookComponent } from './books/deletebook/deletebook.component';
import { AddbookComponent } from './books/addbook/addbook.component';
export const appRoutes: Routes = [
  {
    path: "signup",
    component: UserComponent,
    children: [{ path: "", component: SignUpComponent }],
  },
  {
    path: "login",
    component: UserComponent,
    children: [{ path: "", component: SignInComponent }],
  },
  {
    path: "userprofile",
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "firstpage",
    component: FirstPageComponent,
  },
  {
    path: "ssignup",
    component: StudentComponent,
  },
  {
    path: "insidestudent",
    component: PageComponent,
  },
  {
    path: "function",
    component: FunctionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "viewbooks",
    component: ViewbooksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "viewbooksinstudents",
    component: ViewbooksinstudentsComponent,
  },
  {
    path: "viewstudents",
    component: ViewstudentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "deletebooks",
    component: BooksComponent,
    children: [{ path: "", component: DeletebookComponent }],
    canActivate: [AuthGuard],
  },
  {
    path: "books",
    component: BooksComponent,
    children: [{ path: "", component: AddbookComponent }],
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "/firstpage",
    pathMatch: "full",
  },
];
