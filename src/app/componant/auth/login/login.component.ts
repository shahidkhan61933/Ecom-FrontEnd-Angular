import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:Login;
  public isSubmitted:boolean=false;


  constructor(private authSrv:AuthService,private router:Router) {
    this.login={username:'',password:'',rememberme:false};

  }

  ngOnInit(): void {
  }
  public onSubmit (form:any):void{
    if(form.valid){
      console.log(this.login);
      this.isSubmitted=true;
      this.authSrv.login(this.login).subscribe((data:any)=>{
        console.log(data);
        localStorage.setItem("XTOKEN",data.token);
        this.router.navigateByUrl("/product")
      })
    }else{
      this.validateForm(form);
      console.log("Form IS Not Valid");
    }
      
    }
    public validateForm(form:any){
      Object.keys(form.controls).forEach(field =>{
        const control = form.controls[field];
        control.markAsTouched({onlySelf:true});
      })

    }
    hasError(field:any){
      return(field.invalid && field.touched && field.errors);
    }
  }


