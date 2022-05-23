import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template:`<app-navbar></app-navbar>
  <app-navcontext></app-navcontext>
  <app-dietfor></app-dietfor>
  <app-box></app-box>
  <app-success></app-success>
  <app-how></app-how>
  <app-footer></app-footer>`,
 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homepage';



  }



