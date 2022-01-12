import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../_services/auth.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Token_storageService} from "../../../../_services/token_storage.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form: FormGroup;
  submitted = false;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: Token_storageService, private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password:['',Validators.required]
  } );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    this.authService.login(this.form.value.username,this.form.value.password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    })
  }
  reloadPage(): void {
    window.location.reload();
  }
}
