import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { GuideComponent } from './components/guide/guide.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientEditComponent } from './components/client/client-edit/client-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'guide', component: GuideComponent, pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent, pathMatch: 'full' },
  {
    path: 'clients/create',
    component: ClientCreateComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'clients/:id', component: ClientEditComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
