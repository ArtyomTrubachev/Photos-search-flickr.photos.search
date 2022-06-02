import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  public errorMessage: string ='';
  private subscription: Subscription;
  public lsValueEmail: null | string ='';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.lsValueEmail = localStorage.getItem('email');

    this.userForm = this.formBuilder.group({
      "email": [`${ !!this.lsValueEmail ? this.lsValueEmail: ""}`, [Validators.required, Validators.email]],
      "password": ["", [Validators.required]],
    })
  }

  public signIn(): void {
    this.subscription = this.authService.login(this.userForm.value).subscribe({
      next: (data) => {
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
      complete: () => {
        localStorage.setItem('email', this.userForm.value.email);
        this.router.navigate(['/layout']);
      }
    })
  }

  public clearErrorMessage(): void {
    if (this.errorMessage)
      this.errorMessage = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
