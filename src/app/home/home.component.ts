import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _state: StateService) { }

  ngOnInit(): void {
    const token = <string>localStorage.getItem('token');
    const decoded = this.getDecodedAccessToken(token);
    console.log(decoded);
    this._state.username = decoded.username;
    this._state.user_info = decoded.username;

}
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
