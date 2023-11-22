import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dating app';
  // any could be anything, so is technically cheating
  users:any = [];
  
  // vamos a inyectar una dependencia, i.e, el http module
  // private means use only in the class
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    // no se ejecutará a menos que alguien observe esos cambios
    // por lo tanto, necesitamos subscribirnos a ellos 
    this.http.get('https://localhost:5001/api/users').subscribe({
      // next: lo que queremos que suceda luego de obtener los datos
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request as completed')
    })
  }


}
