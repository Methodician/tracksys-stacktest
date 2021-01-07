// ANGULAR GUTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ANGULAR MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

// ANGULAR FIRE
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// INTERNAL COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

// INTERNAL MODULES
import { AppRoutingModule } from './app-routing.module';

// OTHER INTERNALS
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuideComponent } from './components/guide/guide.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GuideComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ClientCreateComponent,
    ClientListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
