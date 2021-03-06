import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, from } from "rxjs";
import { UserService } from "../shared/user.service";
import { StudentService } from "../shared/student.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    public userService: UserService,
    public studentService: StudentService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.userService.isLoggedIn()) {
      this.router.navigateByUrl("/login");
      this.userService.deleteToken();
      return false;
    }
    // else
    //   if (!this.studentService.isLoggedIn()) {
    //     this.router.navigateByUrl("/slogin");
    //     this.studentService.deleteToken();
    //     return false;
    //   }
    return true;
  }
}
