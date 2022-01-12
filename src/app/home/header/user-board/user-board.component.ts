import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {

  }

  logOut() {
    this.userService.signOut();
    window.location.reload();
  }
}
