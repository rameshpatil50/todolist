import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  index = -1;
  id = undefined;
  task = undefined;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _state: StateService,
    private _rest:RestService,
    public _toster: ToastrService
    ) { }
  
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.index = params['index'];
      this.id = this._state.todolist[this.index]['id'];
      this.task = this._state.todolist[this.index]['task'];
    })
  }

  update(){
    this._rest.update({id : this.id, task : this.task}).subscribe(response =>  {
        console.log(response);
        this._router.navigate(['/home', 'todolist']);
        this._toster.success('Editing done')
      }, error => {
        console.log(error)
      }
    )
  }
}
