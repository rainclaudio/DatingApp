import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dating app';
  // any could be anything, so is technically cheating
  users:any = [];
  
  // vamos a inyectar una dependencia, i.e, el http module
  // private means use only in the class
  constructor(private http: HttpClient){

  }


}
