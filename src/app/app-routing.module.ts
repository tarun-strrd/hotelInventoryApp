import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './gaurds/login.guard';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((m) => m.RoomsModule),
    //canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'booking/:roomId',
    loadChildren: () =>
      import('./bookings/bookings.module').then((m) => m.BookingsModule),
    //canActivate: [LoginGuard],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
