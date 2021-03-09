import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  isSubmitted = false;
  errorMessage = '';
  userModel = new User('mohaimen', 'mohaimen@gmail.com', 1234567890, '', 'morning', true);
  constructor(private _ENROLLMENT: EnrollmentService) { }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.isSubmitted = true;
    this._ENROLLMENT.enroll(this.userModel)
      .subscribe(
          data => console.log('success', data),
          error => this.errorMessage = error.statusText
      );
  }

}
