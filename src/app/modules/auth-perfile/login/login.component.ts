import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: any = null;
  password:any = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }

  ngOnInit(): void{
    if(this.authService.user  && this.authService.token){
      this.router.navigate(['/']);
    }
  }

  login(){
    if(!this.email || !this.password){
      alert('Necesitas ingresar email y contraseña.');
      return; 
    }
    this.authService.login(this.email,this.password).subscribe((resp:any) => {
      if(!resp.error && resp){
        //logeado
        document.location.reload();
      }else{
        if(resp.error.error == 'Unauthorized'){
          alert('User unauthorized');
          return; 
        }
      }
      console.log(resp);
    })
  }
}
