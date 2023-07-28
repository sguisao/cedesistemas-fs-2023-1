import { Observable } from "rxjs";
import { Token } from "../../token";
import { User } from "../user";

export abstract class Usergateway {
    abstract login(email: string,password: string): Observable<Token>
    //abstract register(user : User): Observable<User>
    abstract register( name: string, phone: string, address: string, email: string, password: string): Observable<User>

}
