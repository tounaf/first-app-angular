import { Component, OnInit } from '@angular/core';
// import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color: darkblue;
  //   }
  // `]
})
// reactive form implement OnInit
export class AppComponent implements OnInit {
// autre facon d'acceder au form
  // @ViewChild('f') signupForm: NgForm;
  // defaultQuestion = 'pet';
  // answer = ' ';
  genders = ['male','female'];
  // user = {
  //   username: '',
  //   email: '',
  //   secretQuestion: '',
  //   answer: '',
  //   gender: '',
  //   // masculin: ''
  // }

  // submitted = false;

  signupForm: FormGroup;

  // suggestUserName(){
  //   const suggestedName = 'Superuser';
  //   // this.signupForm.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: ''
  //   //   },
  //   //   secret: 'pet',
  //   //   questionAnswer: '',
  //   //   gender: 'male',
  //   //   masculin: true
  //   // });
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: suggestedName
  //     }
  //   });
  // }
  
  // onSubmit(form: NgForm){ //ElementRef,HTMLFormElement
  //   // console.log(form.value['username']);
  //   console.log(form.value['masculin']);
  // }

  // onSubmit(){ //ElementRef,HTMLFormElement
  //   // console.log(this.signupForm);
  //   // // console.log(this.signupForm.valid);
  //   // console.log(this.signupForm.value['userData']['email']);
  //   // this.submitted = true;
  //   // this.user.username = this.signupForm.value.userData.username ;
  //   // this.user.email = this.signupForm.value.userData.email ;
  //   // this.user.secretQuestion = this.signupForm.value.secret ;
  //   // this.user.answer = this.signupForm.value.questionAnswer ;
  //   // this.user.gender = this.signupForm.value.gender ;
  //   // // reseting values of forms 
  //   // this.signupForm.reset();
  //   console.log(this.signupForm);
  // }
  
  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }
// reactive submitting form
  onSubmit(){ //reactive form
    
    console.log(this.signupForm['username']);
  }
  // <form (ngSubmit)="onSubmit()" #f="ngForm">
  //     <div
  //        id="user-data"
  //       ngModelGroup="userData"
  //       #userData="ngModelGroup">
  //       <div class="form-group">
  //         <label for="username">Username</label>
  //         <input 
  //           type="text"
  //            id="username" 
  //            class="form-control"
  //            ngModel
  //            name="username"
  //            required
  //            #username="ngModel">
  //            <span class="help-block" *ngIf="username.invalid">Please enter the username !</span>
  //       </div>
  //       <button
  //         class="btn btn-default"
  //          type="button"
  //          (click)="suggestUserName()">Suggestion an Username</button>
  //       <div class="form-group">
  //         <label for="email">Email</label>
  //         <input 
  //           type="text"
  //            id="email" 
  //            class="form-control"
  //            ngModel
  //            name="email"
  //            required
  //            email
  //            #email="ngModel">
  //       </div>
  //       <span class="help-block " *ngIf="!email.valid && email.touched">Please enter a valid value !</span>
  //     </div>
  //     <p *ngIf="!userData.valid && userData.touched">User Data is invalid!</p>
  //     <div class="form-group">
  //       <label for="secret">Secret questions</label>
  //       <select 
  //          id="secret" class="form-control"
  //           [ngModel]="defaultQuestion"
  //           name="secret">
  //           <option value="pet">Your first Pet?</option>
  //           <option value="teacher">Your first teacher?</option>
  //       </select>
        
  //         <!-- <input 
  //           type="checkbox"
  //           id="masculin"
  //           class="checkbox"
  //           ngModel
  //           name="masculin" > -->
  //     </div>
  //     <div class="form-group">
  //       <textarea
  //          name="questionAnswer"
  //          cols="30"
  //          class="form-control"
  //         [(ngModel)]="answer"></textarea>
  //     </div>
  //     <!-- two way binding -->
  //     <p> Your reply: {{ answer }}</p>
  //     <div class="radio" *ngFor="let gender of genders">
  //       <label for="">
  //         <input 
  //           type="radio"
  //           name="gender"
  //           ngModel
  //           [value]="gender"
  //           required>
  //           {{ gender }}
  //       </label>
  //     </div>
  //     <button
  //        class="btn btn-primary"
  //         type="submit"
  //         [disabled]="!f.valid">Submit</button>  
  //   </form>
}
