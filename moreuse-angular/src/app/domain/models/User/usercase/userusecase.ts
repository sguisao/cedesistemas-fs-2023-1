import { Observable } from "rxjs";
import { Usergateway } from "../gateway/usergateway";
import { Injectable } from "@angular/core";
import { Token } from "../../token";
import { User } from "../user";

@Injectable({
    providedIn: 'root'
})
export class Userusecase {
  constructor(private _usergateway: Usergateway){ }
  login(email: string ,password: string): Observable<Token>{
    return this._usergateway.login(email, password);
  }

  /*register(user:User): Observable<User>{
    return this._usergateway.register(user);
  }*/

  register(name: string, phone: string, address: string, email: string , password: string ) : Observable <User> {
    return this._usergateway.register(name, phone, address, email, password);
  }
}
