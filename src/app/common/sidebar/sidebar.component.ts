import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _state: StateService,
    private _router: Router) { }

  ngOnInit(): void {
    
  }

  logout(){
    this._state.username = '';
    this._state.user_info = null;
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
