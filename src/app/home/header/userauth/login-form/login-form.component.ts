import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../_services/auth.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form: FormGroup;
  submitted = false;

  formData: any = {
  username: null,
  password: null
  };
  constructor(private authService: AuthService,private formBuilder: FormBuilder,public activeModal: NgbActiveModal) {
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
    const { username, password } = this.formData;
    this.authService.login(username,password)
  }

}
