import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  token:any = '';
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { 
    this.loadStorage();
  }

  loadStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user') ?? '');
    }else{ 
      this.token = '';
      this.user = null;
    }
  }

  login(email: string, password:string){
    let URL = URL_SERVICIOS + '/users/login_ecommerce';
    return this.http.post(URL,{email,password}).pipe(
      map((resp:any) => {
        if(resp.access_token){
          //almacenar en el localstorage la informacion
          return this.seveLocalStorageResponde(resp);
        }else{
          return resp;
        }
      }),catchError((err:any) => {
        return of(err);
      })
    );
  }

  seveLocalStorageResponde(resp:any){
    if(resp.access_token && resp.user){
      localStorage.setItem('token', resp.access_token);
      localStorage.setItem('user', JSON.stringify(resp.user));
      this.user = resp.users;
      this.token = resp.access_token;
      return true;
    }
    return false;
  }


  registro(data:any){
    let URL = URL_SERVICIOS + '/users/register';
    let a = this.http.post(URL,data);
    console.log(a);

    return this.http.post(URL,data);
  }

  logout(){
    this.user = null;
    this.token = ''
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(["auth/login"]);
  }

}
