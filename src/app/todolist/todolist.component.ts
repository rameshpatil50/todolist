import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestService } from '../services/rest.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private _rest: RestService,
    public _state: StateService,
    private _toster: ToastrService) { }

  ngOnInit(): void {
    this.get_tasks();
  }

  markdone(e: any, id: number) {
    console.log(id, e);
    let status;
    if(e.target.checked === true){
      status = 1; 
    } else {
      status = 0
    }
    this._rest.done({ id: id, is_done: status}).subscribe(resp => {
      console.log(resp);
    } ,err => {
      console.log(err);
    })
  }
  
  delete(i:number) {
    if (confirm('Are you sure?')) {
      this._rest.delete({ id: this._state.todolist[i]['id'] }).subscribe(
        resp => {
          console.log(resp);
          this.get_tasks();
          this._toster.success('Task Deleted');
        }, err => {
          console.log(err);
        }
      );
    }
  }

  get_tasks(){
    this._rest.getAllTodo().subscribe(resp => {
      console.log(resp)
      this._state.todolist = resp as any;
    }, error => {
      console.log(error)
    });
  }
}
