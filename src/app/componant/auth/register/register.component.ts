import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //define reactive form 
  public registerForm: FormGroup;
  public isSubmited: boolean = false;
  public response :string ="";

  constructor(private fb: FormBuilder, private authSrv:AuthService, private router:Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      agree: ['', [Validators.required]],
      enabled: [true],

    })

  }

  ngOnInit(): void {
  }
  // register
  public onSubmit(form: any): void {
    if (form.valid) {
      this.isSubmited = true;
      // console.log(this.registerForm.value);
      this.authSrv.register(this.registerForm.value).subscribe((data:any)=>{
        console.log("User is register successfully !");
        this.response = "User is register successfully !";
        this.registerForm.reset();
        this.router.navigateByUrl("/auth/login");
      });
    } else {
      this.validateForm(form)
      // console.log("Form is not valid.");
    }
  }

  public validateForm(form: any) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else {
        this.validateForm(form);
      }

    })
  }
  hasError(name: string) {
    const field = this.registerForm.get(name);
    return (field?.invalid && field?.touched && field?.errors);
  }
  get form() {
    return this.registerForm.controls;

  }
  get name() {
    return this.form['name'];
  }
  get username() {
    return this.form['username'];
  }
  get email() {
    return this.form['email'];
  }
  get password() {
    return this.form['password'];
  }
  get state() {
    return this.form['state'];
  }
  get zipcode() {
    return this.form['zipcode'];
  }
  get agree() {
    return this.form['agree'];
  }

}


