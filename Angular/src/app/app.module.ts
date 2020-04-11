// built-in
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// components
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
//routes
import { appRoutes } from "./routes";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { UserService } from "./shared/user.service";
//other
import { AuthGuard } from "./auth/auth.guard";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { FirstPageComponent } from "./first-page/first-page.component";
import { StudentComponent } from "./student/student.component";
import { PageComponent } from "./page/page.component";
import { FunctionComponent } from "./function/function.component";
import { BooksComponent } from "./books/books.component";
import { ViewbooksComponent } from "./viewbooks/viewbooks.component";
import { ViewstudentsComponent } from "./viewstudents/viewstudents.component";
import { ViewbooksinstudentsComponent } from "./viewbooksinstudents/viewbooksinstudents.component";
import { DeletebookComponent } from "./books/deletebook/deletebook.component";
import { AddbookComponent } from './books/addbook/addbook.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    FirstPageComponent,
    StudentComponent,
    PageComponent,
    FunctionComponent,
    BooksComponent,
    ViewbooksComponent,
    ViewstudentsComponent,
    ViewbooksinstudentsComponent,
    DeletebookComponent,
    AddbookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
