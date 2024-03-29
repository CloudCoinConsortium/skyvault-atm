import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from './transfer.component';

const routes: Routes = [
  {
    path:'',
    component: TransferComponent
  },
  {
    path:':transferID',
    component: TransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
