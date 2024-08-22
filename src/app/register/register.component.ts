import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') registerForm!: NgForm
  phone: string = ''
  password: string = ''
  retypePassword:string = ''
  fullName: string = ''
  address: string = ''
  isAccepted:boolean = false;
  dateOfBirth: Date = new Date();

  constructor() {
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);
  }

  ngOnInit(): void {
  }
  onPhoneChange(){
    console.log('Phone typed: '+ this.phone)
  }
  register(){
    alert('You pressed register!')
  }

  checkPasswordMatch(){
    if (this.password !== this.retypePassword){
      this.registerForm.form.controls['retypePassword'].setErrors({'passwordMismatch':true});
    }
    else {
      this.registerForm.form.controls['retypePassword'].setErrors(null);
    }
  }
  checkAge(){
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
      age--;
    }
    if (age < 18){
      this.registerForm.form.controls['dateOfBirth'].setErrors({'invalidAge':true});
    }
    else {
      this.registerForm.form.controls['dateOfBirth'].setErrors(null);
    }
  }
}
