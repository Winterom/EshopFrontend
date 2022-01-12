import {Injectable} from '@angular/core';
import {Token_storageService} from "./token_storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public roles: string[] = [];
  public isLoggedIn = false;
  public username: string | null ;

  constructor(private token:Token_storageService) {
    this.username = null;
  }
  signOut(): void {
    this.token.signOut();
  }
  public readToken():boolean{
    if (!this.token.getToken()){
      return false;
    }
    this.isLoggedIn = true;
    let user = this.token.parseJwt();
    this.roles = user.roles;
    this.username = user.sub;
    return true;
  }
}
