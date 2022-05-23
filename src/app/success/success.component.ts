import { Component, OnInit } from '@angular/core';

declare function showSlides():any;

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
   showSlides();
     
  }
  title = 'app-js';
}


