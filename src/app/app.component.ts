import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Miltao";

  userData = {
    'email': 'miltao@email.com',
    'role': 'Oreia'
  }

  title = 'angular-moments';
}
