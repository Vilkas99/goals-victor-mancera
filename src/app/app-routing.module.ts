import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HogarComponent } from './hogar/hogar.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: HogarComponent,
  },
  {
    path: 'sobre/:id',
    component: SobreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
