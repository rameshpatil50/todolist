import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
newTask : FormGroup;
  constructor(private _rest: RestService, private _router: Router, private _toster: ToastrService) { 
      
      this.newTask = new FormGroup({
      task: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    
  }

  add(){
    this._rest.addTask(this.newTask.value).subscribe(Response => {
      console.log(Response)
      const respo = Response as any;
      this._toster.success(respo['msg'], "success")
      this._router.navigate(['/home', 'todolist']);
    }, error => {
      this._toster.error("error to add task");
      console.log(error);
    })
  }

  
}
