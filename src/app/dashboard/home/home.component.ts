import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  focus: any;
  focus1: any;

  constructor(private router:Router){}

  aboutUs(){
    this.router.navigate(["/about-us"]);
  }
  onPrograms(){
    this.router.navigate(["/our-programs"]);
  }

}
