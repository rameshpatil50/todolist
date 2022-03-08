import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  username = '';
  user_info : any;
  todolist = [];
  constructor() { }
}
