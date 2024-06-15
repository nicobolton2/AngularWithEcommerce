import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
    name: any = null;
    surname: any = null;
    email: any = null;
    password: any = null;
    password_confirmation: any = null;

    constructor(
      private authService: AuthService,
      private router:Router,
    ){

    }

    ngOnInit(): void{
      if(this.authService.user  && this.authService.token){
        this.router.navigate(['/']);
      }
    }

    registro(){
      if( !this.name || !this.surname || !this.email || !this.password || !this.password_confirmation){
        alert("Falta información en el formulario");
        return;
      }
      
      if(this.password != this.password_confirmation){
        alert("La contraseña y su confirmación no son iguales");
        return;
      }

      let data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

      console.log(data);
      this.authService.registro(data).subscribe((resp:any) => {
        console.log(resp);
        document.location.reload();+
        this.router.navigate(['auth/login']);
      })
    }
}
