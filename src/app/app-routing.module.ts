import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './home/addtodo/addtodo.component';
import { EdittodoComponent } from './home/edittodo/edittodo.component';
import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent,
  children: [
    { path: '', redirectTo: 'todolist',pathMatch: 'full'},
    { path: 'add', component: AddtodoComponent},
    { path: 'edit/:index', component: EdittodoComponent},
    { path: 'todolist', component: TodolistComponent},
    { path: '**', redirectTo: 'todolist'}
   ] },
  { path: '**', redirectTo: 'todolist' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
