import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ["Angular", "React", "Vue"];

  userModel = new User('', 'mohaimen@gmail.com', 45678, '', 'morning', true);
}
