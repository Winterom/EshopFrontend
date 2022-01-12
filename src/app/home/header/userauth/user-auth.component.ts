import {Component} from '@angular/core';
import {RegisterFormComponent} from "./registr-form/register-form.component";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {LoginFormComponent} from "./login-form/login-form.component";

@Component({
  selector: 'app-userauth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class UserAuthComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  openDialogRegistration() {
    const modalRef = this.modalService.open(RegisterFormComponent);
  }

  openDialogLogin() {
    const modalRef = this.modalService.open(LoginFormComponent);
  }
}
