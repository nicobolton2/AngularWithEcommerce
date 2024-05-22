import { Component } from '@angular/core';

declare var $:any;

declare function initPageEcommerce([]):any;

@Component({
  selector: 'app-auth-perfile',
  templateUrl: './auth-perfile.component.html',
  styleUrls: ['./auth-perfile.component.css']
})
export class AuthPerfileComponent {

  ngOnInit(): void {
    setTimeout(() =>{
      initPageEcommerce($);    
    },50);
  }
}
