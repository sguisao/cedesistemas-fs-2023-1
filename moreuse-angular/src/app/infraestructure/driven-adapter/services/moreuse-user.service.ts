import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { Token } from 'src/app/domain/models/token';
import { User } from 'src/app/domain/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway {

  constructor(private http: HttpClient) {
    super();
  }

  login(email: string,password: string): Observable<Token> {
    //const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Token>('http://localhost:3000/auth/login', { email, password })

 /* login(email: string,password: string): any {
    this.http.post('https://run.mocky.io/v3/33410e3b-4850-4fcb-ac76-3a48aa458a97', { email, contraseña: password }).subscribe({
      next: (response : any) => {
        return response;
      },
      error: (e) => console.error(e),
      complete: () => console.info('usuario logueado')
    })
  }


  login(username: string,password: string): Observable<Token> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Token>('https://dummyjson.com/auth/login', {username,password }, { headers })
  }
  register(user:User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>('https://dummyjson.com/users/add', {user}, { headers })
  }*/
  }

 // register( user:User ): Observable<User> {
  register( name: string, phone: string, address: string, email: string, password: string): Observable<User> {
   // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>('http://localhost:3000/auth/signup',{ name, phone, address, email, password })
  }
}
