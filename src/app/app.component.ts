import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submited = false;
  errorMsg='';
  userModel = new User('shivam', 'deepa@gmail.com', 9292999292, 'default', 'morning', true);
  constructor(private _enrollmentService: EnrollmentService) { }
  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit() {
    this._enrollmentService.enrollment(this.userModel).subscribe(
      data => console.log("Success!", data),
      error => this.errorMsg=error.statusText
    );
    this.submited = true;
  }
}
