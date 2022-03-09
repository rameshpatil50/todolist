import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private _tostr: ToastrService,
    private _rest: RestService,
    private _router: Router
    ) { 
  this.loginForm = new FormGroup({
  username: new FormControl('',[Validators.required]),
  password: new FormControl('', [Validators.required])
});
  }


  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
    this._rest.login(this.loginForm.value).subscribe(res => {
      this._tostr.success('Login Successful');
      console.log(res);
      const resp = res as any;
      if(resp.success === true){
        localStorage.setItem('token', resp.data);
        this._router.navigate(['/home']);
      }
    }, err => {
      this._tostr.error("Invalid Username or Password");
    });
  } else {
  this._tostr.error("Wrong Password")
  }
  }
}
