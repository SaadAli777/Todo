import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaadComponent } from './saad/saad.component';
import { TodotableComponent } from './todotable/todotable.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path: 'table', component: TableComponent },
  {path: 'saad', component: SaadComponent },
  {path: 'todotable', component: TodotableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
