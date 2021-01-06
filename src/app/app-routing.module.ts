import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { GuideComponent } from './components/guide/guide.component';
import { ListClientsComponent } from './components/client/list-clients/list-clients.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'guide', component: GuideComponent, pathMatch: 'full' },
  { path: 'clients', component: ListClientsComponent, pathMatch: 'full' },
  {
    path: 'clients/create',
    component: CreateClientComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
